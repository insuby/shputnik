export const checkIfMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform)) || // Для iPad на iOS 13+
    (window.innerWidth <= 768 && window.innerHeight <= 1024)
  );
};
