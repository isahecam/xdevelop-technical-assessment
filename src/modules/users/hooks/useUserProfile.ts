"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/getUserById";

export function useUserProfile(userId: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getUserById(userId),
  });

  return { data, isLoading, error };
}
