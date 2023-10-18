import React, { useEffect, useRef } from 'react';
import opentype from 'opentype.js';

const FontLoader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fontUrl = '/TrialFont-Regular.ttf';

    opentype.load(fontUrl, (err, font) => {
      if (err) {
        console.error('Font could not be loaded:', err);
      } else {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 500;
        canvas.height = 200;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Use OpenType.js to set the font and write text to the canvas
        const path = font.getPath('Sarah\'s font is cool', 0, 150, 72);
        path.fill = '#000000';
        path.draw(ctx);
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FontLoader;
