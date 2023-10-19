import React, { useRef, useEffect } from 'react';

const TypeRibbon = ({ typeface, text, fontSize, ribbonWidth, density, sampleFactor }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!typeface) return;
  
    // Calculate canvas dimensions
    const textWidth = typeface.getAdvanceWidth(text, fontSize);
    const canvasWidth = textWidth + 100;
    const canvasHeight = fontSize + 100;
  
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  
    // Convert text to path commands
    const path = typeface.getPath(text, 0, fontSize, fontSize);
    const commands = path.commands;
  
    // Get canvas context and clear canvas
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw ribbon effect
    for (let d = 0; d < ribbonWidth; d += density) {
      ctx.beginPath();
      commands.forEach((command, i) => {
        const x = command.x + d;
        const y = command.y;
        if (command.type === 'M') {
          ctx.moveTo(x, y);
        } else if (command.type === 'L') {
          ctx.lineTo(x, y);
        } else if (command.type === 'C') {
          ctx.bezierCurveTo(command.x1 + d, command.y1, command.x2 + d, command.y2, x, y);
        } else if (command.type === 'Q') {
          ctx.quadraticCurveTo(command.x1 + d, command.y1, x, y);
        }
      });
      ctx.stroke();
    }
  }, [typeface, text, fontSize, ribbonWidth, density, sampleFactor]);
  

  return <canvas ref={canvasRef} />;
};

export default TypeRibbon;

