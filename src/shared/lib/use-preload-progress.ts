import { useEffect, useState } from 'react';

type PreloadStatus = 'idle' | 'loading' | 'completed' | 'error';

export const usePreloadProgress = () => {
  const [status, setStatus] = useState<PreloadStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [loadedComponents, setLoadedComponents] = useState<string[]>([]);

  const updateProgress = (componentName: string) => {
    setLoadedComponents((prev) => [...prev, componentName]);
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const startPreload = () => {
    setStatus('loading');
    setProgress(0);
    setLoadedComponents([]);
  };

  const completePreload = () => {
    setStatus('completed');
    setProgress(100);
  };

  const errorPreload = () => {
    setStatus('error');
  };

  useEffect(() => {
    if (progress === 100 && status === 'loading') {
      completePreload();
    }
  }, [progress, status]);

  return {
    status,
    progress,
    loadedComponents,
    updateProgress,
    startPreload,
    completePreload,
    errorPreload,
  };
};
