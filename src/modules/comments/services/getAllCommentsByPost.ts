"use server";

import { Comment } from "@/modules/comments/types/comment.types";
import { Post } from "@/modules/posts/types/post.types";

export async function getAllCommentsByPost(
  id: Post["id"],
): Promise<Comment[] | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: Comment[] = await response.json();
  return data;
}
