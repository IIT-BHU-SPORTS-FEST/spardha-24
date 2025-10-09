import React, { useEffect, useRef } from "react";
import "./Confetti.css";

const Confetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ✅ Responsive canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ✅ Adjust confetti count based on screen size
    const isMobile = window.innerWidth < 768; // mobile breakpoint
    const confettiCount = isMobile ? 50 : 170; // fewer confetti on mobile

    // ✅ Create confetti particles
    const confetti = Array.from({ length: confettiCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 3,
      color: `hsl(${Math.random() * 360}, 90%, 60%)`,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
    }));

    let mouseX = canvas.width / 2;
    // eslint-disable-next-line
    let mouseY = canvas.height / 2;

    // ✅ Mouse interactivity
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
        ctx.restore();
      });
    };

    const update = () => {
      confetti.forEach((p) => {
        p.y += p.speed;
        p.x += p.drift + (mouseX - p.x) * 0.0005; // gentle attraction to mouse
        p.rotation += Math.random() * 5;

        // recycle confetti
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 2 + 1;
          p.color = `hsl(${Math.random() * 360}, 90%, 60%)`;
        }
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas"></canvas>;
};

export default Confetti;
