export const downloadFile = async (
  url: string,
  filename: string,
): Promise<void> => {
  try {
    const fullUrl = url.startsWith('/')
      ? `${window.location.origin}${url}`
      : url;

    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Download failed:', error);
    const link = document.createElement('a');
    link.href = url.startsWith('/') ? `${window.location.origin}${url}` : url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
