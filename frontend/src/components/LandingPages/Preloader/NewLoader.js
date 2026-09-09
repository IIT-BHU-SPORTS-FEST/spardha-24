import React, { useEffect, useRef, useState } from "react";

const IMAGE_SRC = new URL("./image.jpeg", import.meta.url).href;

const MIN_LOADER_TIME = 3000;

const SoccerImageLoader = ({
  progress,
  label = "Loading Spardha",
  minDuration = MIN_LOADER_TIME,
  onComplete,
}) => {
  const isControlled = typeof progress === "number";

  const [entered, setEntered] = useState(false);
  const [visible, setVisible] = useState(true);

  const [displayProgress, setDisplayProgress] = useState(
    isControlled
      ? Math.max(0, Math.min(100, progress))
      : 0
  );

  const targetProgress = useRef(
    isControlled
      ? Math.max(0, Math.min(100, progress))
      : 0
  );

  const startTime = useRef(Date.now());
  const direction = useRef(1);

  /* =========================================
     ENTRANCE
  ========================================= */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  /* =========================================
     UPDATE TARGET PROGRESS
  ========================================= */

  useEffect(() => {
    if (!isControlled) return;

    targetProgress.current = Math.max(
      0,
      Math.min(100, progress)
    );
  }, [progress, isControlled]);

  /* =========================================
     SMOOTH PROGRESS
  ========================================= */

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

  /* =========================================
     AUTOMATIC PROGRESS
  ========================================= */

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

  /* =========================================
     FINISH LOADER
  ========================================= */

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

      setTimeout(() => {
        setVisible(false);

        if (onComplete) {
          onComplete();
        }
      }, 350);
    }, remaining);

    return () => clearTimeout(timer);
  }, [
    progress,
    isControlled,
    minDuration,
    onComplete,
  ]);

  /* =========================================
     IMAGE COORDINATES

     Original image: 1200 x 900

     Football center:
     X = 510
     Y = 210
  ========================================= */

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
           RESET
        ===================================== */

        .sil-root,
        .sil-root * {
          box-sizing: border-box;
        }


        /* =====================================
           MAIN LOADER
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

          overflow: hidden;

          z-index: 99999;

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
           IMAGE FRAME

           The actual image is ALWAYS kept
           in its native 4:3 ratio.
        ===================================== */

        .sil-frame {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          opacity: 0;

          transform: scale(1.025);

          transition:
            opacity 0.9s
              cubic-bezier(.2,.8,.2,1),

            transform 1.1s
              cubic-bezier(.2,.8,.2,1);
        }


        .sil-frame.sil-in {
          opacity: 1;

          transform: scale(1);
        }


        /* =====================================
           IMAGE

           contain = NEVER stretched
           NEVER distorted
        ===================================== */

        .sil-img {
          position: absolute;

          width: 100%;
          height: 100%;

          inset: 0;

          display: block;

          object-fit: contain;

          object-position: center center;

          user-select: none;

          pointer-events: none;

          -webkit-user-drag: none;

          animation:
            sil-breathe
            9s ease-in-out infinite;
        }


        /* =====================================
           SVG

           Same dimensions as image.
           This keeps ring aligned.
        ===================================== */

        .sil-overlay-svg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          display: block;

          pointer-events: none;

          overflow: visible;
        }


        /* =====================================
           RING TRACK
        ===================================== */

        .sil-track {
          fill: none;

          stroke:
            rgba(244,211,94,0.25);

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

          pointer-events: none;

          background:
            linear-gradient(
              75deg,
              transparent 40%,
              rgba(255,255,255,0.08) 47%,
              rgba(255,255,255,0.20) 50%,
              rgba(255,255,255,0.08) 53%,
              transparent 60%
            );

          mix-blend-mode: overlay;

          transform:
            translateX(-120%);

          animation:
            sil-sweep
            7s ease-in-out infinite;

          animation-delay: 1.2s;
        }


        /* =====================================
           BOTTOM GRADIENT

           Makes text readable.
        ===================================== */

        .sil-scrim {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          width: 100%;

          height: 40%;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(12,22,48,0.10) 15%,
              rgba(12,22,48,0.45) 40%,
              rgba(12,22,48,0.90) 78%,
              rgba(12,22,48,1) 100%
            );
        }


        /* =====================================
           FOOTER
        ===================================== */

        .sil-footer {
          position: absolute;

          left:
            clamp(24px, 5vw, 70px);

          right:
            clamp(24px, 5vw, 70px);

          bottom:
            clamp(28px, 6vh, 60px);

          z-index: 10;

          display: flex;

          align-items: flex-end;

          justify-content:
            space-between;

          gap: 30px;
        }


        /* =====================================
           TEXT
        ===================================== */

        .sil-caption {
          color: var(--cream);

          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-size:
            clamp(12px, 1vw, 15px);

          line-height: 1.4;

          letter-spacing: 0.02em;

          min-width: 0;
        }


        .sil-caption b {
          display: block;

          margin-bottom: 5px;

          font-family:
            "Space Grotesk",
            Inter,
            system-ui,
            sans-serif;

          font-size:
            clamp(26px, 3vw, 40px);

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
            clamp(140px, 20vw, 260px);

          height: 5px;

          flex-shrink: 0;

          margin-bottom: 6px;

          overflow: hidden;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.18);
        }


        .sil-bar-fill {
          width: 0;

          height: 100%;

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
           IMAGE ANIMATION
        ===================================== */

        @keyframes sil-breathe {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.018);
          }
        }


        /* =====================================
           COMET ROTATION
        ===================================== */

        @keyframes sil-rotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        /* =====================================
           SHIMMER
        ===================================== */

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
           601px - 1024px
        ===================================== */

        @media
          (min-width: 601px)
          and (max-width: 1024px) {

          .sil-img {
            object-fit: contain;
          }


          .sil-footer {
            left: 35px;
            right: 35px;

            bottom: 35px;

            gap: 25px;
          }


          .sil-caption b {
            font-size: 32px;
          }


          .sil-bar {
            width: 200px;
          }


          .sil-scrim {
            height: 42%;
          }
        }


        /* =====================================
           MOBILE PORTRAIT
        ===================================== */

        @media (max-width: 600px) {

          .sil-root {
            min-height: 100dvh;
          }


          /*
             Keep the image proportional.
             Since the source is 4:3, it will
             fit the width of the phone.
          */

          .sil-img {
            width: 100%;
            height: auto;

            min-height: 0;

            top: 0;
            bottom: auto;

            object-fit: contain;

            object-position: top center;
          }


          .sil-overlay-svg {
            width: 100%;
            height: auto;

            aspect-ratio: 4 / 3;

            top: 0;
            bottom: auto;
          }


          /* Stronger bottom gradient */

          .sil-scrim {
            height: 62%;

            background:
              linear-gradient(
                180deg,
                transparent 0%,
                rgba(12,22,48,0.08) 15%,
                rgba(12,22,48,0.30) 35%,
                rgba(12,22,48,0.78) 60%,
                rgba(12,22,48,0.97) 82%,
                rgba(12,22,48,1) 100%
              );
          }


          /* Footer becomes vertical */

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

            justify-content: flex-end;

            gap: 13px;
          }


          .sil-caption {
            font-size: 12px;
          }


          .sil-caption b {
            font-size: 30px;

            margin-bottom: 4px;
          }


          .sil-bar {
            width: 100%;

            height: 4px;

            margin-bottom: 0;
          }


          /*
             Slightly slower image movement
             on mobile to avoid excessive
             visual movement.
          */

          .sil-img {
            animation-duration: 12s;
          }
        }


        /* =====================================
           SMALL MOBILE
           <= 380px
        ===================================== */

        @media (max-width: 380px) {

          .sil-footer {

            left: 16px;
            right: 16px;

            bottom:
              max(
                16px,
                env(safe-area-inset-bottom)
              );

            gap: 10px;
          }


          .sil-caption b {
            font-size: 26px;
          }


          .sil-caption {
            font-size: 11px;
          }


          .sil-bar {
            height: 4px;
          }
        }


        /* =====================================
           MOBILE LANDSCAPE
        ===================================== */

        @media
          (max-width: 900px)
          and (max-height: 550px)
          and (orientation: landscape) {

          .sil-img {
            width: auto;

            height: 100%;

            max-width: none;

            top: 50%;
            left: 50%;

            transform:
              translate(-50%, -50%);
          }


          .sil-overlay-svg {
            width: auto;

            height: 100%;

            max-width: none;

            top: 50%;
            left: 50%;

            transform:
              translate(-50%, -50%);

            aspect-ratio: 4 / 3;
          }


          .sil-scrim {
            height: 55%;

            background:
              linear-gradient(
                180deg,
                transparent 0%,
                rgba(12,22,48,0.35) 45%,
                rgba(12,22,48,0.95) 100%
              );
          }


          .sil-footer {

            left: 25px;
            right: 25px;

            bottom: 18px;

            flex-direction: row;

            align-items: flex-end;

            gap: 20px;
          }


          .sil-caption b {
            font-size: 23px;
          }


          .sil-caption {
            font-size: 11px;
          }


          .sil-bar {
            width: 180px;

            height: 4px;
          }
        }


        /* =====================================
           VERY SHORT DEVICES
        ===================================== */

        @media (max-height: 650px)
          and (orientation: portrait) {

          .sil-footer {
            bottom: 18px;
          }


          .sil-caption b {
            font-size: 25px;
          }


          .sil-scrim {
            height: 52%;
          }
        }


        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media
          (prefers-reduced-motion: reduce) {

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


      {/* =====================================
          LOADER FRAME
      ===================================== */}

      <div
        className={`sil-frame ${
          entered ? "sil-in" : ""
        }`}
      >

        {/* ==================================
            IMAGE
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


          {/* RING BACKGROUND */}

          <circle
            className="sil-track"
            cx={cx}
            cy={cy}
            r={r}
          />


          {/* PROGRESS */}

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


          {/* COMET */}

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


        {/* BOTTOM GRADIENT */}

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