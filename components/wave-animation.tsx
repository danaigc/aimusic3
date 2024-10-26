"use client";

import { useEffect, useRef } from 'react';

export const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const animate = () => {
      time += 0.005;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // More vibrant colors with higher opacity
      const colors = [
        `hsla(${time * 20}, 90%, 65%, 0.5)`,      // Brighter primary
        `hsla(${time * 20 + 120}, 95%, 60%, 0.5)`, // Vibrant secondary
        `hsla(${time * 20 + 240}, 85%, 55%, 0.5)`, // Rich tertiary
        `hsla(${time * 20 + 60}, 80%, 50%, 0.5)`,  // Additional wave
      ];

      // Center the waves vertically
      const centerY = canvas.height * 0.5;
      const waves = 12; // More waves for richer visuals

      for (let w = 0; w < waves; w++) {
        ctx.beginPath();
        ctx.strokeStyle = colors[w % colors.length];
        ctx.lineWidth = 4; // Thicker lines

        for (let i = 0; i <= canvas.width; i += 2) {
          const amplitude = 60 * (1 + w * 0.15); // Larger amplitude
          const frequency = 0.003 - w * 0.0002;
          const speed = time * (1 + w * 0.1);
          
          // More complex wave pattern
          const y = centerY + 
                   Math.sin(i * frequency + speed) * amplitude +
                   Math.sin(i * frequency * 2 + speed * 1.5) * (amplitude * 0.5) +
                   Math.cos(i * frequency * 0.5 - speed) * (amplitude * 0.3);

          if (i === 0) {
            ctx.moveTo(i, y);
          } else {
            ctx.lineTo(i, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        mixBlendMode: 'soft-light',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)'
      }}
    />
  );
};