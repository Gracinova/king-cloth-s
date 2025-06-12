export const downloadCanvasToImage = () => {
  const canvas = document.querySelector('canvas');
  if (!canvas) {
    alert('Canvas not found!');
    return;
  }

  // Buat canvas sementara
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');

  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  // Gambar ulang isi canvas utama
  ctx.drawImage(canvas, 0, 0);

  // Gaya umum teks
  ctx.shadowColor = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur = 4;
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'white';

  // 🔠 Kiri Atas: Judul
  const titleText = 'Gracinova The Great';
  ctx.font = `${canvas.width * 0.035}px sans-serif`;
  ctx.textAlign = 'left';
  ctx.fillText(titleText, 20, 20);

  // 💰 Kanan Bawah: Harga
  const priceText = 'Rp40.000';
  ctx.font = `${canvas.width * 0.045}px sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = '#FFD700'; // Warna emas agar menonjol
  ctx.fillText(priceText, canvas.width - 20, canvas.height - 20);

  // Buat tautan download
  const link = document.createElement('a');
  link.download = 'Gracinova The Great.png';
  link.href = tempCanvas.toDataURL();
  link.click();
};



export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
