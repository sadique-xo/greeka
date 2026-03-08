#!/usr/bin/env node
/**
 * Optimizes gallery images: resizes to max 1200px width, compresses.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GALLERY_DIR = join(__dirname, "../public/images/gallery");
const MAX_WIDTH = 1200;
const QUALITY = 85;

async function optimizeImages() {
  const files = await readdir(GALLERY_DIR);
  const images = files.filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));

  console.log(`Optimizing ${images.length} images...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of images) {
    const inputPath = join(GALLERY_DIR, file);
    const ext = extname(file).toLowerCase();
    const baseName = file.replace(ext, "");
    const outputPath = join(GALLERY_DIR, `${baseName}.webp`);

    try {
      const stats = await stat(inputPath);
      totalBefore += stats.size;

      const image = sharp(inputPath);
      const meta = await image.metadata();
      const width = meta.width || 1920;
      const resizeWidth = Math.min(width, MAX_WIDTH);

      await image
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newStats = await stat(outputPath);
      totalAfter += newStats.size;

      const saved = ((1 - newStats.size / stats.size) * 100).toFixed(0);
      console.log(`  ✓ ${file} → ${baseName}.webp (${(stats.size / 1024).toFixed(0)}KB → ${(newStats.size / 1024).toFixed(0)}KB, -${saved}%)`);

      // Remove original if we created WebP (and it's different file)
      if (outputPath !== inputPath) {
        await import("fs/promises").then((fs) => fs.unlink(inputPath));
      }
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  console.log(`\nDone! Total: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB`);
  if (totalBefore > 0) {
    console.log(`Saved ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%`);
  }
}

optimizeImages().catch(console.error);
