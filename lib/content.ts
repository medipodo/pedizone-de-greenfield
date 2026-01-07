import fs from "fs";
import path from "path";

export interface Section {
  id: string;
  h2: string;
  content?: string;
  paragraphs?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lastModified: string;
  sections: Section[];
}

export interface PillarPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lastModified: string;
  sections: Section[];
}

export interface ContentData {
  fusspilz: {
    pillar: PillarPage;
    articles: Article[];
  };
}

const contentPath = path.join(process.cwd(), "content", "fusspilz.json");

export function getContentData(): ContentData {
  const fileContents = fs.readFileSync(contentPath, "utf8");
  return JSON.parse(fileContents);
}

export function getPillarData(): PillarPage {
  const data = getContentData();
  return data.fusspilz.pillar;
}

export function getAllArticleSlugs(): string[] {
  const data = getContentData();
  return data.fusspilz.articles.map((article) => article.slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  const data = getContentData();
  return data.fusspilz.articles.find((article) => article.slug === slug);
}

export function getAllArticles(): Article[] {
  const data = getContentData();
  return data.fusspilz.articles;
}

export const BASE_URL = "https://pedizone-de-greenfield.vercel.app";
