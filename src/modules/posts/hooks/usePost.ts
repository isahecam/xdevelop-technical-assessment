"use client";

import { getPostById } from "@/modules/posts/services/getPostById";
import { Post } from "@/modules/posts/types/post.types";
import { useQuery } from "@tanstack/react-query";

export function usePost(id: Post["id"]) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id),
  });

  return { data, isLoading, error };
}
