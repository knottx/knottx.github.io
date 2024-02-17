'use client'
import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://knottx.github.io${src}`;
}
