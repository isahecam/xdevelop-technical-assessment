"use client";

import { getAllCommentsByPost } from "@/modules/comments/services/getAllCommentsByPost";
import { Comment } from "@/modules/comments/types/comment.types";
import { useQuery } from "@tanstack/react-query";

export function useComments(postId: Comment["postId"]) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getAllCommentsByPost(postId),
  });

  return { data, isLoading, error };
}
