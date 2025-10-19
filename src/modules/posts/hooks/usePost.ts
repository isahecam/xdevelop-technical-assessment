"use client";

import { getAllPosts } from "@/modules/posts/services/getAllPosts";
import { useQuery } from "@tanstack/react-query";

export function usePost() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return { data, isLoading, error };
}
