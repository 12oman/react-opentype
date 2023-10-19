import { useState, useEffect } from 'react';
import opentype from 'opentype.js';

const useTypeface = (typefaceUrl) => {
  const [typeface, setTypeface] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    opentype.load(typefaceUrl, (err, loadedTypeface) => {
      setIsLoading(false);
      if (err) {
        console.error('Typeface could not be loaded:', err);
        return;
      }
      setTypeface(loadedTypeface);
    });
  }, [typefaceUrl]);

  return [typeface, isLoading];
};

export default useTypeface;
