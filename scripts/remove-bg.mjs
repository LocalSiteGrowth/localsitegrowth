import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../components/electrician/logo.png");
const output = path.join(__dirname, "../public/electrician-logo.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data);
// Remove light background: any pixel where all channels are high (near-white or light gradient)
for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  // The logo background is a white/light-cyan gradient
  // Orange logo pixels have high R, medium G, low B
  // Background pixels have high R, high G, high B (all bright)
  const isBackground = r > 180 && g > 180 && b > 150;
  if (isBackground) {
    pixels[i + 3] = 0;
  }
}

await sharp(Buffer.from(pixels), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Done — saved to ${output}`);
