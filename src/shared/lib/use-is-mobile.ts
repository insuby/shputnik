import { useEffect, useState } from 'react';

import { checkIfMobile } from './utils';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(checkIfMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
