import { lazy } from 'react';

type LazyComponent = ReturnType<typeof lazy>;

const componentCache = new Map<string, LazyComponent>();

export const preloadComponent = (
  importFn: () => Promise<any>,
  cacheKey: string,
) => {
  if (componentCache.has(cacheKey)) {
    return componentCache.get(cacheKey)!;
  }

  const lazyComponent = lazy(importFn);
  componentCache.set(cacheKey, lazyComponent);

  return lazyComponent;
};

type PreloadPriority = 'high' | 'medium' | 'low';

type PreloadTask = {
  importFn: () => Promise<any>;
  priority: PreloadPriority;
  delay?: number;
};

const preloadTasks: PreloadTask[] = [
  { importFn: () => import('pages/about'), priority: 'high', delay: 0 },
  { importFn: () => import('pages/works'), priority: 'high', delay: 500 },
  { importFn: () => import('pages/reviews'), priority: 'medium', delay: 1000 },
  { importFn: () => import('pages/blog'), priority: 'medium', delay: 1500 },
  {
    importFn: () => import('pages/products/autocredit'),
    priority: 'low',
    delay: 2000,
  },
  {
    importFn: () => import('pages/products/bnpl'),
    priority: 'low',
    delay: 2500,
  },
  {
    importFn: () => import('pages/products/bank-credit'),
    priority: 'low',
    delay: 3000,
  },
  {
    importFn: () => import('pages/products/business-credit'),
    priority: 'low',
    delay: 3500,
  },
  {
    importFn: () => import('pages/products/development'),
    priority: 'low',
    delay: 4000,
  },
  {
    importFn: () => import('pages/products/micro-credit'),
    priority: 'low',
    delay: 4500,
  },
  {
    importFn: () => import('pages/products/p2p'),
    priority: 'low',
    delay: 5000,
  },
];

export const preloadComponents = async () => {
  const executeTask = async (task: PreloadTask) => {
    if (task.delay) {
      await new Promise((resolve) => setTimeout(resolve, task.delay));
    }

    try {
      await task.importFn();
    } catch (error) {
      console.warn(`Ошибка предзагрузки компонента:`, error);
    }
  };

  const highPriorityTasks = preloadTasks.filter(
    (task) => task.priority === 'high',
  );
  const mediumPriorityTasks = preloadTasks.filter(
    (task) => task.priority === 'medium',
  );
  const lowPriorityTasks = preloadTasks.filter(
    (task) => task.priority === 'low',
  );

  try {
    await Promise.allSettled(highPriorityTasks.map(executeTask));

    setTimeout(() => {
      Promise.allSettled(mediumPriorityTasks.map(executeTask));
    }, 1000);

    setTimeout(() => {
      Promise.allSettled(lowPriorityTasks.map(executeTask));
    }, 2000);
  } catch (error) {
    console.warn('Ошибка предзагрузки компонентов:', error);
  }
};
