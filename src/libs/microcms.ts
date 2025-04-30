// SDK利用準備
import { createClient } from "microcms-js-sdk";

// MicroCMSクライアント作成
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

// 型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: string[];
  tag: string[];
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

// ブログ一覧取得
export const getBlogs = async (queries?: any) => {
  return await client.get<BlogResponse>({
    endpoint: "blogs",
    queries,
  });
};

// ブログ詳細取得
export const getBlogDetail = async (contentId: string, queries?: any) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};