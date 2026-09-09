import React, { useEffect, useRef, useState } from 'react';
import styles from './SportsCards.module.css';
import sportsData from './sportsData';

function ViewIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.viewIcon}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.5 12s3.5-6.25 9.5-6.25S21.5 12 21.5 12 18 18.25 12 18.25 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const canUseTilt = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function SportsCard({ sport }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pointerIsActiveRef = useRef(false);

  const motionRef = useRef({
    current: { rotateX: 0, rotateY: 0, lightX: 50, lightY: 50, lift: 0 },
    target: { rotateX: 0, rotateY: 0, lightX: 50, lightY: 50, lift: 0 },
  });

  const applyMotion = () => {
    const card = cardRef.current;
    const motion = motionRef.current;

    if (!card) {
      animationFrameRef.current = null;
      return;
    }

    const easeAmount = pointerIsActiveRef.current ? 0.16 : 0.1;
    const current = motion.current;
    const target = motion.target;

    current.rotateX += (target.rotateX - current.rotateX) * easeAmount;
    current.rotateY += (target.rotateY - current.rotateY) * easeAmount;
    current.lightX += (target.lightX - current.lightX) * easeAmount;
    current.lightY += (target.lightY - current.lightY) * easeAmount;
    current.lift += (target.lift - current.lift) * easeAmount;

    card.style.setProperty('--tilt-x', `${current.rotateX.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${current.rotateY.toFixed(2)}deg`);
    card.style.setProperty('--light-x', `${current.lightX.toFixed(2)}%`);
    card.style.setProperty('--light-y', `${current.lightY.toFixed(2)}%`);
    card.style.setProperty('--lift-y', `${current.lift.toFixed(2)}px`);

    const isMoving =
      Math.abs(target.rotateX - current.rotateX) > 0.03 ||
      Math.abs(target.rotateY - current.rotateY) > 0.03 ||
      Math.abs(target.lightX - current.lightX) > 0.08 ||
      Math.abs(target.lightY - current.lightY) > 0.08 ||
      Math.abs(target.lift - current.lift) > 0.03;

    if (isMoving) {
      animationFrameRef.current = requestAnimationFrame(applyMotion);
    } else {
      animationFrameRef.current = null;
    }
  };

  const scheduleMotion = () => {
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(applyMotion);
    }
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType !== 'mouse' || !canUseTilt()) {
      return;
    }

    pointerIsActiveRef.current = true;
    motionRef.current.target.lift = -9;
    scheduleMotion();
  };

  const handlePointerMove = (event) => {
    if (
      event.pointerType !== 'mouse' ||
      !pointerIsActiveRef.current ||
      !canUseTilt()
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);

    motionRef.current.target.rotateX = (0.5 - y) * 5;
    motionRef.current.target.rotateY = (x - 0.5) * 5;
    motionRef.current.target.lightX = x * 100;
    motionRef.current.target.lightY = y * 100;

    scheduleMotion();
  };

  const resetPointerMotion = () => {
    pointerIsActiveRef.current = false;

    motionRef.current.target = {
      rotateX: 0,
      rotateY: 0,
      lightX: 50,
      lightY: 50,
      lift: 0,
    };

    scheduleMotion();
  };

  const toggleCard = () => {
    setIsFlipped((currentValue) => !currentValue);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`${styles.sportsCard} ${isFlipped ? styles.isFlipped : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointerMotion}
      onPointerCancel={resetPointerMotion}
    >
      <div className={styles.tiltLayer}>
        <div className={styles.cardInner}>
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            <button
              type="button"
              className={styles.frontButton}
              onClick={toggleCard}
              aria-label={`View ${sport.name} rulebook details`}
              aria-pressed={isFlipped}
              tabIndex={isFlipped ? -1 : 0}
            >
              <div className={styles.imageFrame}>
                <img
                  className={styles.eventImage}
                  src={sport.image}
                  alt={`${sport.name} event placeholder`}
                  draggable="false"
                />
              </div>

              <span className={styles.eventName}>{sport.name}</span>
            </button>
          </div>

          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <button
              type="button"
              className={styles.backSurface}
              onClick={toggleCard}
              aria-label={`Flip ${sport.name} card to the front`}
              tabIndex={isFlipped ? 0 : -1}
            />

            <div className={styles.backContent}>
              <p className={styles.backEyebrow}>Spardha 2026</p>
              <h3 className={styles.backTitle}>{sport.name}</h3>
              <p className={styles.backDescription}>{sport.description}</p>

              <a
                className={styles.rulebookButton}
                href={sport.rulebook}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isFlipped ? 0 : -1}
                onClick={(event) => event.stopPropagation()}
              >
                <ViewIcon />
                View Rulebook
              </a>

              <button
                type="button"
                className={styles.flipBackButton}
                onClick={toggleCard}
                tabIndex={isFlipped ? 0 : -1}
              >
                Back to event
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SportsCards({
  events = sportsData,
  className = '',
  ariaLabel = 'Spardha sports events',
}) {
  return (
    <section
      className={`${styles.eventsSection} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className={styles.eventsGrid}>
        {events.map((sport) => (
          <SportsCard key={sport.id} sport={sport} />
        ))}
      </div>
    </section>
  );
}