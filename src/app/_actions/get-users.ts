"use server";

import { User, UserListResponse } from "@/modules/users/types/user.types";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`https://reqres.in/api/users?per_page=30`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!,
    },
  });

  const { data } = (await response.json()) as UserListResponse;
  return data;
}
