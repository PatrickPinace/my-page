import { readFileSync } from 'node:fs';

/**
 * Wymiary pliku WebP bez zależności — czyta się z nagłówka kontenera RIFF.
 * Potrzebne w buildzie, żeby ustawić aspect-ratio karuzeli od razu w HTML
 * (bez tego kontener migałby przy ładowaniu obrazka).
 */
export function webpSize(absolutePath: string): { width: number; height: number } {
  const buf = readFileSync(absolutePath);
  const chunk = buf.toString('ascii', 12, 16);

  if (chunk === 'VP8X') {
    // szerokość/wysokość jako 24-bit little-endian, wartość - 1
    const width = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
    const height = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
    return { width, height };
  }
  if (chunk === 'VP8 ') {
    const width = buf.readUInt16LE(26) & 0x3fff;
    const height = buf.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }
  if (chunk === 'VP8L') {
    const b = buf.readUInt32LE(21);
    const width = (b & 0x3fff) + 1;
    const height = ((b >> 14) & 0x3fff) + 1;
    return { width, height };
  }
  throw new Error(`Nieznany format WebP: ${absolutePath}`);
}
