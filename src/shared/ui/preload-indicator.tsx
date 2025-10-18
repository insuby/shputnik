import { usePreloadProgress } from 'shared/lib/use-preload-progress';

type PreloadIndicatorProps = {
  className?: string;
};

export const PreloadIndicator = ({ className = '' }: PreloadIndicatorProps) => {
  const { status, progress, loadedComponents } = usePreloadProgress();

  if (status === 'idle' || status === 'completed') {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              Предзагрузка страниц
            </span>
          </div>
          <div className="text-xs text-gray-500">{progress}%</div>
        </div>

        <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
          <div
            className="h-1.5 rounded-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {loadedComponents.length > 0 && (
          <div className="mt-2 text-xs text-gray-600">
            Загружено: {loadedComponents.length} компонентов
          </div>
        )}
      </div>
    </div>
  );
};
