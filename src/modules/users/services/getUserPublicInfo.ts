import { getSession } from "@/modules/auth/services/session";
import { User, UserResponse } from "@/modules/users/types/user.types";

export async function getUserPublicInfo(): Promise<User | null> {
  const session = await getSession();
  if (!session) {
    return null;
  }

  const userId = session.userId;

  // Obtener información pública del usuario a partir del userId
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
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
