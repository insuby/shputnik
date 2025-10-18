import { Link, type LinkProps } from 'react-router-dom';

type ScrollLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const ScrollLink = ({ children, onClick, ...props }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Вызываем оригинальный обработчик, если он есть
    onClick?.(e);
    
    // Прокручиваем наверх
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
