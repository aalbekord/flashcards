import { useEffect } from 'react';

export const useOnKeyPress = (callback, targetKey) => {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === targetKey) {
        callback(); // Call the callback function
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback, targetKey]);
};