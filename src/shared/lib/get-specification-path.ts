export type ProductType =
  | 'bnpl'
  | 'p2p'
  | 'credit-conveyor'
  | 'microcredit'
  | 'autocredit'
  | 'bank-credit'
  | 'islam-finance'
  | 'business-credit'
  | 'development'
  | 'data-unload'
  | 'f-data'
  | 'reconciliation';

export const getSpecificationPath = (
  productType: ProductType | null,
): string | null => {
  if (!productType) return null;

  switch (productType) {
    case 'bnpl':
      return '/docs/BNPL и PoS.pdf';
    case 'p2p':
      return '/docs/P2P-кредитование.pdf';
    case 'credit-conveyor':
      return '/docs/Кредитный конвейер.pdf';
    case 'reconciliation':
      return '/docs/ПО для реконсиляции данных.pdf';
    default:
      return null;
  }
};
