import { useCallback, useEffect, useRef } from 'react';


const useClickOutside = (callback : () => void) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleClick = useCallback((event:MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
    }
  },[callback]);

  useEffect(() => {
        document.addEventListener('click', handleClick,true);
    return () => {
      document.removeEventListener('click', handleClick,true);
    };
  }, [handleClick]);

  return ref;
};

export default useClickOutside;