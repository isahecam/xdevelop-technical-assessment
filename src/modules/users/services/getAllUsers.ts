"use server";

import { User, UserListResponse } from "@/modules/users/types/user.types";

export async function getAllUsers(): Promise<User[] | null> {
  const response = await fetch(`https://reqres.in/api/users?per_page=12`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!,
    },
  });

  if (!response.ok) {
    return null;
  }

  const { data } = (await response.json()) as UserListResponse;
  return data;
}
