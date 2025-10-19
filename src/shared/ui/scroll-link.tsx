import { Link, type LinkProps } from 'react-router-dom';

type ScrollLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const ScrollLink = ({ children, onClick, ...props }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Вызываем оригинальный обработчик, если он есть
    onClick?.(e);
    
    // Немедленная прокрутка
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Дополнительная прокрутка с задержкой для надежности
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    
    // Еще одна проверка через больший интервал
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    
    // Финальная проверка
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 100);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
