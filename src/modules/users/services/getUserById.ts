"use server";

import { User, UserResponse } from "@/modules/users/types/user.types";

export async function getUserById(id: User["id"]): Promise<User | null> {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!,
    },
  });

  if (!response.ok) {
    return null;
  }

  const { data } = (await response.json()) as UserResponse;
  return data;
}
