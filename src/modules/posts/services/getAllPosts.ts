"use server";

import { Post } from "@/modules/posts/types/post.types";

export async function getAllPosts(): Promise<Post[] | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=20`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: Post[] = await response.json();
  return data;
}
