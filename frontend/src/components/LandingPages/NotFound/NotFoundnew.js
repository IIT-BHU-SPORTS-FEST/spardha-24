import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundnew.css';

const NotFound = () => {
  React.useEffect(() => {
    document.title = '404 | Spardha — IIT (BHU) Varanasi';
  }, []);

  return (
    <div className="nf-scene">
      <div className="nf-grain" aria-hidden="true"></div>

      <main className="nf-main">
        <p className="nf-note nf-note-right">
          Same spirit,<br />
          new paths
          <span className="nf-scribble" aria-hidden="true"></span>
        </p>

        <div className="nf-hero">
          <svg className="nf-brush nf-brush-a" viewBox="0 0 300 120" aria-hidden="true" focusable="false">
            <path
              d="M4 78 C 40 20, 120 8, 210 34 C 250 46, 286 58, 296 70 L 298 84 C 270 74, 230 64, 190 58 C 120 50, 60 62, 10 90 Z"
              fill="#00D8D0"
              opacity="0.8"
            />
          </svg>
          <svg className="nf-brush nf-brush-b" viewBox="0 0 300 140" aria-hidden="true" focusable="false">
            <path
              d="M6 34 C 60 88, 150 110, 240 78 C 268 68, 292 60, 296 56 L 297 70 C 288 78, 268 88, 240 98 C 158 122, 72 104, 2 58 Z"
              fill="#FFD21A"
              opacity="0.66"
            />
          </svg>
          <svg className="nf-brush nf-brush-c" viewBox="0 0 300 80" aria-hidden="true" focusable="false">
            <path
              d="M8 44 C 44 22, 120 18, 190 30 C 222 36, 260 44, 284 48 L 287 56 C 252 50, 212 44, 180 40 C 118 30, 48 34, 20 50 Z"
              fill="#00D8D0"
              opacity="0.58"
            />
          </svg>
          <svg className="nf-brush nf-brush-d" viewBox="0 0 260 90" aria-hidden="true" focusable="false">
            <path
              d="M4 50 C 40 22, 120 14, 196 30 C 226 38, 250 48, 258 52 L 260 58 C 236 54, 208 46, 186 40 C 120 26, 52 30, 22 56 Z"
              fill="#FFC928"
              opacity="0.5"
            />
          </svg>

          <div className="nf-404" role="img" aria-label="404">
            <span className="nf-char">4</span>
            <span className="nf-char nf-zero">
              0
              <svg className="nf-runner" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="15.2" cy="4.4" r="1.7" fill="currentColor" stroke="none" />
                  <path d="M14.6 7.8 L12.6 12.8 L8.6 17" />
                  <path d="M12.6 12.8 L16.6 14.2 L20.4 15.6" />
                  <path d="M8.6 17 L4.6 19.4" />
                  <path d="M16.6 14.2 L17.6 20" />
                  <path d="M8.6 17 L8.6 19.6" />
                </g>
              </svg>
            </span>
            <span className="nf-char">4</span>
          </div>

          <h1 className="nf-headline">
            You're in uncharted <span className="nf-accent">design territory!</span>
          </h1>
          <p className="nf-support">
            Looks like you took a wrong turn. But don't worry,
            <br />
            even the best creatives get lost sometimes!
          </p>
          <Link to="/" className="nf-return">
            Return home <span className="nf-return-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <svg
          className="nf-arch"
          viewBox="0 0 1200 340"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="nf-arch-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0A2E44" />
              <stop offset="1" stopColor="#062238" />
            </linearGradient>
            <radialGradient id="nf-arch-glow" cx="0.5" cy="0.45" r="0.55">
              <stop offset="0" stopColor="rgba(0,216,208,0.12)" />
              <stop offset="1" stopColor="rgba(0,216,208,0)" />
            </radialGradient>
          </defs>

          <rect x="120" y="0" width="960" height="340" fill="url(#nf-arch-glow)" />
          <path d="M60 306 H1140" stroke="#0F3A55" strokeWidth="1.5" />

          <g fill="url(#nf-arch-fill)" stroke="#177B85" strokeWidth="1.3">
            <path d="M545 150 H655 V238 H545 Z" />
            <path d="M545 150 Q600 92 655 150 Z" />
            <rect x="596" y="58" width="8" height="24" />
            <circle cx="600" cy="52" r="4" />
            <path d="M565 238 A50 92 0 0 1 665 238 Z" />
            <path d="M590 340 V292 A10 34 0 0 1 610 292 V340" fill="#041C30" stroke="#177B85" />

            <rect x="392" y="128" width="80" height="212" />
            <path d="M392 128 Q432 82 472 128 Z" />
            <path d="M410 238 A26 86 0 0 1 462 238 Z" fill="#041C30" />

            <rect x="728" y="128" width="80" height="212" />
            <path d="M728 128 Q768 82 808 128 Z" />
            <path d="M746 238 A26 86 0 0 1 798 238 Z" fill="#041C30" />

            <path d="M150 340 V252 A30 64 0 0 1 210 252 V340 Z" />
            <path d="M225 340 V232 A30 64 0 0 1 285 232 V340 Z" />
            <path d="M300 340 V220 A30 64 0 0 1 360 220 V340 Z" />
            <path d="M840 340 V220 A30 64 0 0 1 900 220 V340 Z" />
            <path d="M915 340 V232 A30 64 0 0 1 975 232 V340 Z" />
            <path d="M990 340 V252 A30 64 0 0 1 1050 252 V340 Z" />

            <path d="M160 206 Q185 178 210 196" fill="none" />
            <path d="M235 196 Q260 168 285 186" fill="none" />
            <path d="M310 184 Q335 156 360 174" fill="none" />
            <path d="M840 174 Q865 156 890 184" fill="none" />
            <path d="M915 186 Q940 168 965 196" fill="none" />
            <path d="M990 196 Q1015 178 1040 206" fill="none" />
          </g>
        </svg>
      </main>

      <p className="nf-note nf-note-left">
        <svg className="nf-crown" viewBox="0 0 64 40" aria-hidden="true" focusable="false">
          <path
            d="M6 30 L4 14 L16 22 L32 6 L48 22 L60 14 L58 30 Z
               M2 34 H62"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Bigger <br />
        Stronger <br />
        Together
        <span className="nf-scribble" aria-hidden="true"></span>
      </p>

      <footer className="nf-papers">
        <Link to="/" className="nf-paper nf-paper-brand">
          <strong>Spardha</strong>
          <span>IIT BHU</span>
        </Link>

        <div className="nf-paper nf-paper-team">
          <span>Team behind the brackets</span>
          <span className="nf-pipe" aria-hidden="true">
            |
          </span>
          <Link to="/">404 Page not found <span aria-hidden="true">→</span></Link>
        </div>

        <button type="button" className="nf-diamond" aria-label="Previous page">
          <span className="nf-diamond-arrow" aria-hidden="true">←</span>
        </button>
        <button type="button" className="nf-diamond" aria-label="Next page">
          <span className="nf-diamond-arrow" aria-hidden="true">→</span>
        </button>

        <div className="nf-paper nf-paper-narr">
          <em>Where design takes shape</em>
          <strong>Our narratives in design <span aria-hidden="true">→</span></strong>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;