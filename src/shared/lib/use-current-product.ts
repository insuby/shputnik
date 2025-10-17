import { useLocation } from 'react-router-dom';

import { RoutesPath } from '../routes-path';

type ProductType =
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
  | 'f-data';

export const useCurrentProduct = (): ProductType | null => {
  const location = useLocation();

  switch (location.pathname) {
    case RoutesPath.BNPL:
      return 'bnpl';
    case RoutesPath.P2P:
      return 'p2p';
    case RoutesPath.MICROCREDIT:
    case RoutesPath.AUTOCREDIT:
    case RoutesPath.BANKCREDIT:
    case RoutesPath.ISLAMFINANCE:
    case RoutesPath.BUSINESSCREDIT:
      return 'credit-conveyor';
    default:
      return null;
  }
};
