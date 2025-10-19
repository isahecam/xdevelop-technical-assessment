"use client";

import { getUserById } from "@/modules/users/services/getUserById";
import { useQuery } from "@tanstack/react-query";

export function useUserProfile(userId: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getUserById(userId),
  });

  return { data, isLoading, error };
}
