export const getColorAtTopLeft = (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        resolve(color);
      } else {
        reject("Could not get canvas context");
      }
    };

    img.onerror = () => {
      reject("Image failed to load");
    };
  });
};

export function getThemeUrlParam() {
  try {
    const theme = new URLSearchParams(window.location.search).get("theme");
    if (!theme) return null;
    const allowed = new Set(["light", "dark", "lieon", "book", "hunnycakehorse", "system"]);
    if (!allowed.has(theme)) {
      console.warn('Unknown theme from URL param:', theme);
      return null;
    }
    localStorage.setItem('theme', theme);
    console.info('Applied theme from URL:', theme);
    return theme;
  } catch (err) {
    console.error('Error during theme URL param parsing:', err);
  }
}