"use client";

import { getAllPosts } from "@/modules/posts/services/getAllPosts";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return { data, isLoading, error };
}
