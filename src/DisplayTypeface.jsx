import React, { useRef, useEffect } from 'react';

const DisplayTypeface = ({ text, typeface, fontSize = 72, x = 0, y = 150 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!typeface) return;

    // Calculate text width and set canvas width
    const textWidth = typeface.getAdvanceWidth(text, fontSize);
    const canvasWidth = textWidth + x * 2; // Add some padding
    const canvasHeight = fontSize + y * 2; // Assuming single-line text

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const path = typeface.getPath(text, x, y, fontSize);
    path.fill = '#000000';
    path.draw(ctx);
  }, [typeface, text, fontSize, x, y]);

  return <canvas ref={canvasRef} />;
};

export default DisplayTypeface;

