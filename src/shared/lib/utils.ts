export const checkIfMobile = () => {
  if (typeof window === 'undefined' || window.innerWidth >= 1024) return false;

  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform))
  );
};
