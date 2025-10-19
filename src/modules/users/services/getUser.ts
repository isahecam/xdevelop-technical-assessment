"use server";

import { getRandomRole } from "@/lib/getRandomRole";
import { User, UserResponse } from "@/modules/users/types/user.types";

export async function getUser(userId: User["id"]): Promise<User | null> {
  // Obtener información pública del usuario a partir del userId
  const user = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!,
    },
  });

  if (!user.ok) {
    return null;
  }

  const { data } = (await user.json()) as UserResponse;

  // Asignamos un rol aleatorio al usuario
  const userWithRole = { ...data, role: getRandomRole() };

  return userWithRole;
}
