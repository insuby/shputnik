import { Helmet } from 'react-helmet-async';

type PageMetaProps = {
  title: string;
  description: string;
  keywords?: string;
};

export const usePageMeta = ({
  title,
  description,
  keywords,
}: PageMetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};
