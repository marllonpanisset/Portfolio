// app/types/blog.ts
import { Metadata } from './posts'; // Importa Metadata do novo arquivo

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

// Movido para este arquivo para ser reutilizado.
export type BlogCardProps = {
  slug: string;
  title: string;
  summary: string;
};