import React from 'react';
import css from './TopMarquee.module.css';

const TopMarquee = () => {
  return (
    <div className={css['marquee-wrapper']}>
      <div className={css['dark-banner']}>
        <div className={css['track-slow']}>
          <div className={css['content-group']}>
            <span className={css['main-text']}>
              THE ARENA ✦ WHERE CHAMPIONS RISE ✦ COMPETE • CONQUER • ENERGY ✦ EXCELLENCE ✦ LEGACY ✦ SPORTS ✦ PASSION ✦&nbsp;
            </span>
          </div>
          <div className={css['content-group']} aria-hidden="true">
            <span className={css['main-text']}>
              THE ARENA ✦ WHERE CHAMPIONS RISE ✦ COMPETE • CONQUER • ENERGY ✦ EXCELLENCE ✦ LEGACY ✦ SPORTS ✦ PASSION ✦&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMarquee;