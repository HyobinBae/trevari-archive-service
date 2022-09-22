import { useState, useEffect } from 'react';

export type WindowSize = null | 'sm' | 'md' | 'lg' | 'xl';
export interface ISize {
  width: number;
  height: number;
  mode: WindowSize;
}

export const getWindowSize = (width: number): Exclude<WindowSize, null> => {
  return width > 1199 ? 'xl' : width > 991 ? 'lg' : width > 767 ? 'md' : 'sm';
};

export function useWindowSize(): ISize {
  const isClient = typeof window === 'object';

  const getSize = (): ISize => {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
      mode: isClient ? getWindowSize(window.innerWidth) : null,
    };
  };

  const [windowSize, setWindowSize] = useState<ISize>(getSize);

  useEffect(() => {
    if (!isClient) {
      return () => ({});
    }

    const handleResize = () => setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]);

  return windowSize;
}
