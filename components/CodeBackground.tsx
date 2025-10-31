'use client';

import { useEffect, useRef } from 'react';

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect theme
    const getThemeColor = () => {
      if (typeof window !== 'undefined') {
        return document.documentElement.classList.contains('dark') ? '#8B5CF6' : '#9333ea';
      }
      return '#8B5CF6';
    };

    let themeColor = getThemeColor();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      themeColor = getThemeColor();
    });

    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = themeColor;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -this.radius) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Code line class
    class CodeLine {
      x: number;
      y: number;
      text: string;
      fontSize: number;
      opacity: number;
      speed: number;
      rotation: number;

      constructor() {
        const codeSnippets = [
          'const portfolio = new Portfolio();',
          'function build() { return success; }',
          'class Developer extends Engineer { }',
          'async function deploy() { }',
          'if (creative) { build(); }',
          'while (learning) { grow++; }',
          'const design = { beautiful: true };',
          'export default Portfolio;',
          'npm install creativity',
          '<div>Code with passion</div>',
          'function innovate() { }',
          'const skills = [...technologies];',
          'const code = "art";',
          'function solve() { return solution; }',
          'class Problem extends Solution { }',
        ];

        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.fontSize = Math.random() * 4 + 10;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.speed = Math.random() * 0.5 + 0.3;
        this.rotation = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.rotation * 0.1) * 0.5;
        
        if (this.y < -50) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillStyle = themeColor;
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = 'center';
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Create code lines
    const codeLines: CodeLine[] = [];
    for (let i = 0; i < 15; i++) {
      codeLines.push(new CodeLine());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Update and draw code lines
      codeLines.forEach((line) => {
        line.update();
        line.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        background: 'transparent',
      }}
    />
  );
}
