import { useState, useEffect, useMemo } from 'react';

export const useBreakpoint = () => {
  const breakpoints = {
    small: 400,
    medium: 600,
    large: 700,
  };

  const computeBreakpoint = () => {
    const width = window.innerWidth;
    if (width < breakpoints.small) return 'small';
    else if (width < breakpoints.medium) return 'medium';
    else return 'large';
  };

  const [breakpoint, setBreakpoint] = useState(computeBreakpoint);

  const currentBreakpoint = useMemo(computeBreakpoint, [window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = computeBreakpoint();
      if (breakpoint !== newBreakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return currentBreakpoint;
};