import { useLocation } from 'react-router-dom';

import { ProductType } from 'shared/lib/get-specification-path.ts';

import { RoutesPath } from '../routes-path';

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
    case RoutesPath.FDATA:
      return 'reconciliation';
    default:
      return null;
  }
};
