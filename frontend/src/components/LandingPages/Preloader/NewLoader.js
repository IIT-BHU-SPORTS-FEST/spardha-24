import React, { useEffect, useRef, useState } from "react";

const IMAGE_SRC = new URL("./image.jpeg", import.meta.url).href;

const MIN_LOADER_TIME = 2000;

const SoccerImageLoader = ({
  progress,
  label = "Loading Spardha",
  minDuration = MIN_LOADER_TIME,
  onComplete,
}) => {
  const isControlled = typeof progress === "number";

  const [entered, setEntered] = useState(false);

  const [displayProgress, setDisplayProgress] = useState(
    isControlled
      ? Math.max(0, Math.min(100, progress))
      : 0
  );

  const [visible, setVisible] = useState(true);

  const targetProgress = useRef(
    isControlled
      ? Math.max(0, Math.min(100, progress))
      : 0
  );

  const startTime = useRef(Date.now());
  const direction = useRef(1);

  /* -----------------------------------------
     Initial entrance animation
  ----------------------------------------- */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  /* -----------------------------------------
     Update target progress
  ----------------------------------------- */

  useEffect(() => {
    if (!isControlled) return;

    targetProgress.current = Math.max(
      0,
      Math.min(100, progress)
    );
  }, [progress, isControlled]);

  /* -----------------------------------------
     Smooth actual progress
  ----------------------------------------- */

  useEffect(() => {
    if (!isControlled) return;

    let frame;

    const animate = () => {
      setDisplayProgress((current) => {
        const target = targetProgress.current;

        const difference = target - current;

        if (Math.abs(difference) < 0.1) {
          return target;
        }

        return current + difference * 0.08;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isControlled]);

  /* -----------------------------------------
     Automatic progress when no progress prop
  ----------------------------------------- */

  useEffect(() => {
    if (isControlled) return;

    const interval = setInterval(() => {
      setDisplayProgress((current) => {
        let next =
          current + direction.current * 0.28;

        if (next >= 100) {
          next = 100;
          direction.current = -1;
        }

        if (next <= 0) {
          next = 0;
          direction.current = 1;
        }

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isControlled]);

  /* -----------------------------------------
     Complete loader when progress = 100
  ----------------------------------------- */

  useEffect(() => {
    if (!isControlled) return;
    if (progress < 100) return;

    const elapsed =
      Date.now() - startTime.current;

    const remaining = Math.max(
      0,
      minDuration - elapsed
    );

    const timer = setTimeout(() => {
      setDisplayProgress(100);

      const fadeTimer = setTimeout(() => {
        setVisible(false);

        if (onComplete) {
          onComplete();
        }
      }, 300);

      return () => clearTimeout(fadeTimer);
    }, remaining);

    return () => clearTimeout(timer);
  }, [
    progress,
    isControlled,
    minDuration,
    onComplete,
  ]);

  /* -----------------------------------------
     Football position in 1200 x 900 image
  ----------------------------------------- */

  const pct = Math.max(
    0,
    Math.min(100, displayProgress)
  );

  const cx = 510;
  const cy = 210;
  const r = 137;

  const circumference =
    2 * Math.PI * r;

  const dash =
    (pct / 100) * circumference;

  return (
    <div
      className={`sil-root ${
        visible ? "" : "sil-hidden"
      }`}
      role="status"
      aria-label="Loading"
    >
      <style>{`

        /* =====================================
           ROOT
        ===================================== */

        .sil-root {
          --navy: #0c1630;
          --gold: #f4d35e;
          --cream: #f6f2e7;

          position: fixed;
          inset: 0;

          width: 100%;
          height: 100%;
          height: 100dvh;

          background: var(--navy);

          z-index: 99999;

          overflow: hidden;

          isolation: isolate;

          opacity: 1;
          visibility: visible;

          transition:
            opacity 0.45s ease,
            visibility 0.45s ease;
        }

        .sil-root.sil-hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }


        /* =====================================
           FRAME
        ===================================== */

        .sil-frame {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          opacity: 0;

          transform: scale(1.035);

          transition:
            opacity 0.9s
              cubic-bezier(.2,.8,.2,1),

            transform 1.2s
              cubic-bezier(.2,.8,.2,1);
        }

        .sil-frame.sil-in {
          opacity: 1;
          transform: scale(1);
        }


        /* =====================================
           IMAGE
        ===================================== */

        .sil-img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: contain;
          object-position: center;

          display: block;

          user-select: none;
          pointer-events: none;

          -webkit-user-drag: none;

          animation:
            sil-breathe 9s
            ease-in-out infinite;
        }


        /* =====================================
           SVG OVERLAY
        ===================================== */

        .sil-overlay-svg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          overflow: visible;
        }


        /* =====================================
           RING TRACK
        ===================================== */

        .sil-track {
          fill: none;

          stroke:
            rgba(244, 211, 94, 0.25);

          stroke-width: 9;
        }


        /* =====================================
           PROGRESS RING
        ===================================== */

        .sil-progress {
          fill: none;

          stroke: var(--gold);

          stroke-width: 9;

          stroke-linecap: round;

          filter:
            drop-shadow(
              0 0 7px
              rgba(244,211,94,0.8)
            )

            drop-shadow(
              0 0 16px
              rgba(244,211,94,0.35)
            );

          transition:
            stroke-dasharray
            0.18s ease-out;
        }


        /* =====================================
           COMET
        ===================================== */

        .sil-comet {
          animation:
            sil-rotate
            6s linear infinite;

          transform-origin:
            ${cx}px ${cy}px;
        }


        /* =====================================
           SHIMMER
        ===================================== */

        .sil-shimmer {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              75deg,
              transparent 40%,
              rgba(255,255,255,0.12) 48%,
              rgba(255,255,255,0.26) 50%,
              rgba(255,255,255,0.12) 52%,
              transparent 60%
            );

          mix-blend-mode: overlay;

          transform:
            translateX(-120%);

          animation:
            sil-sweep
            7s ease-in-out infinite;

          animation-delay: 1.2s;

          pointer-events: none;
        }


        /* =====================================
           BOTTOM SCRIM
        ===================================== */

        .sil-scrim {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 38%;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(12,22,48,0.25) 20%,
              rgba(12,22,48,0.88) 80%,
              rgba(12,22,48,0.98) 100%
            );

          pointer-events: none;
        }


        /* =====================================
           FOOTER
        ===================================== */

        .sil-footer {
          position: absolute;

          left:
            clamp(20px, 5vw, 70px);

          right:
            clamp(20px, 5vw, 70px);

          bottom:
            clamp(24px, 6vh, 60px);

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 24px;

          z-index: 5;
        }


        .sil-caption {
          color: var(--cream);

          font-size:
            clamp(12px, 1.1vw, 15px);

          line-height: 1.4;

          letter-spacing: 0.01em;
        }


        .sil-caption b {
          display: block;

          margin-bottom: 4px;

          font-family:
            "Space Grotesk",
            Inter,
            system-ui,
            sans-serif;

          font-size:
            clamp(25px, 3vw, 38px);

          line-height: 1;

          font-weight: 700;

          color: var(--cream);

          font-variant-numeric:
            tabular-nums;
        }


        /* =====================================
           PROGRESS BAR
        ===================================== */

        .sil-bar {
          width:
            min(220px, 30vw);

          height: 5px;

          flex-shrink: 0;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.18);

          overflow: hidden;

          margin-bottom: 6px;
        }


        .sil-bar-fill {
          height: 100%;

          width: 0;

          border-radius: inherit;

          background:
            linear-gradient(
              90deg,
              #9c2b44,
              #f4d35e
            );

          box-shadow:
            0 0 12px
            rgba(244,211,94,0.4);

          transition:
            width 0.18s ease-out;
        }


        /* =====================================
           ANIMATIONS
        ===================================== */

        @keyframes sil-breathe {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.025);
          }
        }


        @keyframes sil-rotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        @keyframes sil-sweep {

          0% {
            transform:
              translateX(-120%);
          }

          60% {
            transform:
              translateX(120%);
          }

          100% {
            transform:
              translateX(120%);
          }
        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 900px) {

          .sil-img {
            object-fit: contain;
          }

          .sil-bar {
            width: 180px;
          }
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {

          .sil-frame {
            transform: scale(1.02);
          }

          .sil-frame.sil-in {
            transform: scale(1);
          }


          .sil-img {
            object-fit: contain;
            object-position: center;
          }


          .sil-scrim {
            height: 45%;

            background:
              linear-gradient(
                180deg,
                transparent 0%,
                rgba(12,22,48,0.45) 30%,
                rgba(12,22,48,0.94) 80%,
                rgba(12,22,48,1) 100%
              );
          }


          .sil-footer {

            left: 20px;
            right: 20px;

            bottom:
              max(
                20px,
                env(safe-area-inset-bottom)
              );

            flex-direction: column;

            align-items: stretch;

            gap: 12px;
          }


          .sil-caption {
            font-size: 12px;
          }


          .sil-caption b {
            font-size: 28px;
          }


          .sil-bar {
            width: 100%;

            max-width: none;

            height: 4px;

            margin-bottom: 0;
          }
        }


        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media (max-width: 380px) {

          .sil-footer {
            left: 16px;
            right: 16px;
          }

          .sil-caption b {
            font-size: 25px;
          }
        }


        /* =====================================
           LANDSCAPE MOBILE
        ===================================== */

        @media (
          max-height: 500px
        ) and (orientation: landscape) {

          .sil-footer {

            bottom: 16px;

            flex-direction: row;

            align-items: flex-end;
          }

          .sil-caption b {
            font-size: 22px;
          }

          .sil-bar {
            width:
              min(180px, 28vw);
          }
        }


        /* =====================================
           ACCESSIBILITY
        ===================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .sil-img,
          .sil-comet,
          .sil-shimmer {
            animation: none;
          }

          .sil-frame {

            transition: none;

            opacity: 1;

            transform: none;
          }

          .sil-progress,
          .sil-bar-fill {
            transition: none;
          }
        }

      `}</style>


      <div
        className={`sil-frame ${
          entered ? "sil-in" : ""
        }`}
      >

        {/* ==================================
            LOADER IMAGE
        ================================== */}

        <img
          className="sil-img"
          src={IMAGE_SRC}
          alt="Football player performing a bicycle kick"
          draggable="false"
        />


        {/* ==================================
            PROGRESS SVG
        ================================== */}

        <svg
          className="sil-overlay-svg"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >

          <defs>

            <linearGradient
              id="sil-trail"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >

              <stop
                offset="0%"
                stopColor="#f4d35e"
                stopOpacity="0"
              />

              <stop
                offset="100%"
                stopColor="#f4d35e"
                stopOpacity="0.95"
              />

            </linearGradient>

          </defs>


          <circle
            className="sil-track"
            cx={cx}
            cy={cy}
            r={r}
          />


          <circle
            className="sil-progress"
            cx={cx}
            cy={cy}
            r={r}
            transform={
              `rotate(-90 ${cx} ${cy})`
            }
            strokeDasharray={
              `${dash} ${
                circumference - dash
              }`
            }
          />


          <g className="sil-comet">

            <path
              d={`
                M ${cx} ${cy - r}
                A ${r} ${r}
                0 0 1
                ${cx + r * 0.82}
                ${cy - r * 0.55}
              `}
              fill="none"
              stroke="url(#sil-trail)"
              strokeWidth="9"
              strokeLinecap="round"
            />

          </g>

        </svg>


        {/* SHIMMER */}
        <div className="sil-shimmer" />


        {/* BOTTOM SCRIM */}
        <div className="sil-scrim" />


        {/* ==================================
            FOOTER
        ================================== */}

        <div className="sil-footer">

          <div className="sil-caption">

            <b>
              {Math.round(pct)}%
            </b>

            {label}

            {pct < 100 ? "…" : ""}

          </div>


          <div
            className="sil-bar"
            aria-hidden="true"
          >

            <div
              className="sil-bar-fill"
              style={{
                width: `${pct}%`,
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default SoccerImageLoader;