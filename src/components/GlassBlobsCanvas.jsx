import React, { useEffect, useRef } from "react";

const COLORS = [
  "rgba(30, 41, 59, 0.32)", // dark blue glass
  "rgba(145, 94, 255, 0.22)", // violet
  "rgba(39, 174, 96, 0.18)", // green
  "rgba(255, 193, 7, 0.14)", // gold
  "rgba(255, 94, 94, 0.16)", // red
  "rgba(255,255,255,0.10)", // subtle white
];
const NUM_BLOBS = 8;
const MIN_SIZE = 120;
const MAX_SIZE = 260;
const SPEED = 0.5;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const GlassBlobsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let blobs = Array.from({ length: NUM_BLOBS }).map(() => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(MIN_SIZE, MAX_SIZE),
      dx: randomBetween(-SPEED, SPEED),
      dy: randomBetween(-SPEED, SPEED),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let blob of blobs) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fillStyle = blob.color;
        ctx.shadowColor = blob.color;
        ctx.shadowBlur = 40;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.restore();
        blob.x += blob.dx;
        blob.y += blob.dy;
        if (blob.x < 0 || blob.x > width) blob.dx *= -1;
        if (blob.y < 0 || blob.y > height) blob.dy *= -1;
      }
      requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
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
        zIndex: -1,
        pointerEvents: "none",
        background: "#18122B",
      }}
    />
  );
};

export default GlassBlobsCanvas;
