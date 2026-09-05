import React, { useState, useEffect, useMemo } from 'react';
import './FootballCountdown.css';

export default function FootballCountdown() {
    const targetDate = useMemo(() => {
        return new Date().getTime() + (34 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (58 * 60 * 1000) + (37 * 1000);
    }, []);

    const [timeLeft, setTimeLeft] = useState({
        days: '34',
        hours: '05',
        minutes: '58',
        seconds: '37'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0'),
                    seconds: String(seconds).padStart(2, '0')
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <h2 className="countdown-title">
                <span className="title-decor"></span>
                COUNT DOWN
                <span className="title-decor"></span>
            </h2>
            <div className="timer-grid">
                
                <div className="time-block">
                    <div className="ball-wrapper ball-days">
                        <span className="time-value">{timeLeft.days}</span>
                    </div>
                    <span className="countdown-label">DAYS</span>
                </div>

                <div className="countdown-colon">:</div>

                <div className="time-block">
                    <div className="ball-wrapper ball-hours">
                        <span className="time-value">{timeLeft.hours}</span>
                    </div>
                    <span className="countdown-label">HOURS</span>
                </div>

                <div className="countdown-colon">:</div>

                <div className="time-block">
                    <div className="ball-wrapper ball-minutes">
                        <span className="time-value">{timeLeft.minutes}</span>
                    </div>
                    <span className="countdown-label">MINUTES</span>
                </div>

                <div className="countdown-colon">:</div>

                <div className="time-block">
                    <div className="ball-wrapper ball-seconds">
                        <span className="time-value">{timeLeft.seconds}</span>
                    </div>
                    <span className="countdown-label">SECONDS</span>
                </div>

            </div>
        </div>
    );
}