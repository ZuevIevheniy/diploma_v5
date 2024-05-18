import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
    // console.log('Я вошел в useClickOutside');
    
    useEffect(() => {
      const handleClickOutside = event => {
        // console.log('Я вошел в handleClickOutside');
        if (ref.current && !ref.current.contains(event.target)) {
          handler();
        }
      };
  

      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [ref, handler]);
  }



