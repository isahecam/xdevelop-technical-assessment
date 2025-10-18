import { decryptToken, encryptToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

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
  return await decryptToken(session);
}

/**
 * Función para actualizar la sesión del usuario,
 * extendiendo la expiración del token JWT en la cookie,
 * como si fuera una renovación de un refresh token.
 *
 * @param request - NextRequest del usuario
 * @async
 * @returns NextResponse con la cookie actualizada
 */
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Decodificar el token y extender su expiración
  const parsed = await decryptToken(session);

  // Crear una nueva fecha de expiración como si fuera un refresh token con 7 días de vida
  parsed.expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 días

  // Crear la respuesta con la cookie actualizada
  const res = NextResponse.next();

  // Establecer la cookie con el token actualizado
  res.cookies.set({
    name: "session",
    value: await encryptToken(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
