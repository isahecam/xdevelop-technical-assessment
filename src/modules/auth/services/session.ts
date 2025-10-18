import "server-only";

import { decrypt, encrypt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { UserSession } from "../types/session.types";

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 días
  const session = await encrypt({ userId, expiresAt });

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Función para obtener la sesión del usuario desde la cookie,
 * y decodificar el token JWT almacenado en ella.
 *
 * @async
 * @returns La sesión del usuario o null si no existe
 */
export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  const payload = await decrypt(session);
  if (!payload) return null;

  console.log(payload);

  return payload as unknown as UserSession;
}

/**
 * Función para actualizar la sesión del usuario,
 * extendiendo la expiración del token JWT en la cookie,
 * como si fuera una renovación de un refresh token.
 *
 * @async
 */
export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  const payload = await decrypt(session);
  if (!payload) return null;

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 días

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Función para eliminar la sesión del usuario,
 * eliminando la cookie de sesión.
 *
 * @async
 * @return void
 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
