"use server";

import { getRandomRole } from "@/lib/getRandomRole";
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

  // Asignamos un rol aleatorio a cada usuario
  const userWithRoles = data.map(user => {
    return { ...user, role: getRandomRole() };
  });

  return userWithRoles;
}
