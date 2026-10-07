"use client";
import React, { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const points = [];
    // Adjust rows and cols to cover typical screens (more horizontal than vertical)
    const cols = 55;
    const rows = 35;
    const spacing = 65;
    
    // Initialize grid points on the X-Y plane
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        // Center the grid at (0,0)
        let x = (j - cols / 2) * spacing;
        let y = (i - rows / 2) * spacing;
        row.push({ x, y, z: 0 }); // z will be the depth ripple
      }
      points.push(row);
    }

    let time = 0;
    let animationFrameId;

    // Projection settings
    const focalLength = 800;
    const camZ = -600; // Camera pulled back

    // Mouse tracking for interaction
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    function render() {
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      // Match the emerald theme, make it very subtle
      ctx.strokeStyle = isDark ? "rgba(16, 185, 129, 0.11)" : "rgba(16, 185, 129, 0.18)";
      ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.35)";
      ctx.lineWidth = 1;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Arrays to hold projected 2D coordinates
      const projected = [];

      // Update Z positions to create 3D wave motion + Mouse Interaction
      for (let i = 0; i < rows; i++) {
        let projectedRow = [];
        for (let j = 0; j < cols; j++) {
          let p = points[i][j];
          
          // 1. Base ambient fluid ripple (Reduced speed and amplitude for a calmer, professional look)
          p.z = Math.sin(p.x * 0.002 + time * 0.5) * 15 + 
                Math.cos(p.y * 0.003 + time * 0.4) * 15 +
                Math.sin((p.x + p.y) * 0.001 - time * 0.2) * 10;

          // Variables for dynamic X/Y
          let currentX = p.x;
          let currentY = p.y;

          // Project to 2D screen to calculate mouse distance
          let relativeZ = p.z - camZ;
          let scale = focalLength / relativeZ;
          let screenX = width / 2 + currentX * scale;
          let screenY = height / 2 + currentY * scale;

          let distX = screenX - mouse.x;
          let distY = screenY - mouse.y;
          let distToMouse = Math.sqrt(distX * distX + distY * distY);
          
          // 2. Mouse interaction: Premium smooth Gaussian push/lens effect
          if (distToMouse < 350) {
            // Gaussian curve for a perfectly smooth bulge
            let force = Math.exp(-(distToMouse * distToMouse) / 25000); 
            
            // Push grid sharply towards the camera (bulge effect)
            p.z -= force * 180;
            
            // Slightly repel points in X/Y plane for a "magnifying glass" / fluid parting effect
            currentX += (distX / distToMouse) * force * 20;
            currentY += (distY / distToMouse) * force * 20;

            // Recalculate projection with new X, Y, Z
            relativeZ = p.z - camZ;
            scale = focalLength / relativeZ;
            screenX = width / 2 + currentX * scale;
            screenY = height / 2 + currentY * scale;
          }

          projectedRow.push({ x: screenX, y: screenY, scale: scale });
        }
        projected.push(projectedRow);
      }

      // Draw Wireframe Lines
      ctx.beginPath();
      // Horizontal lines
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 1; j++) {
          let p1 = projected[i][j];
          let p2 = projected[i][j + 1];
          if (p1 && p2) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      // Vertical lines
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows - 1; i++) {
          let p1 = projected[i][j];
          let p2 = projected[i + 1][j];
          if (p1 && p2) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // Draw little dots at intersections
      for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j += 1) {
          let p = projected[i][j];
          // Determine dot size based on Z depth (scale)
          if (p && p.scale > 0.5) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.scale * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.012;
      animationFrameId = requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -2,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
