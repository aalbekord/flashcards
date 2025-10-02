import { useEffect } from 'react';
// reusable method for keyboard interactivity
export const useOnKeyPress = (callback, targetKey) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      // doesn't allow for keyboard interactivity while typing in an input/textarea
      if(activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
        return
      }
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