import { useRef, useEffect } from "react";

const NUM_STARS = 80;
const STAR_COLOR = "#A5B4FC";
const LINE_LENGTH = 32;
const FALL_SPEED = 2.5;

function randomX(width) {
  return Math.random() * width;
}
function randomY(height) {
  return Math.random() * height;
}
function randomSpeed() {
  return FALL_SPEED + Math.random() * 2.5;
}

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = Array.from({ length: NUM_STARS }).map(() => ({
      x: randomX(width),
      y: randomY(height),
      speed: randomSpeed(),
      opacity: 0.7 + Math.random() * 0.3,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x, star.y + LINE_LENGTH);
        ctx.strokeStyle = `rgba(165,180,252,${star.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = STAR_COLOR;
        ctx.shadowBlur = 16;
        ctx.stroke();
        ctx.restore();
        star.y += star.speed;
        if (star.y > height) {
          star.x = randomX(width);
          star.y = 0;
          star.speed = randomSpeed();
          star.opacity = 0.7 + Math.random() * 0.3;
        }
      }
      requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = Array.from({ length: NUM_STARS }).map(() => ({
        x: randomX(width),
        y: randomY(height),
        speed: randomSpeed(),
        opacity: 0.7 + Math.random() * 0.3,
      }));
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default StarsCanvas;
