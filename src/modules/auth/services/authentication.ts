import "server-only";
import { AuthToken, Credentials } from "@/modules/auth/types/auth.types";

/**
 * Inicio de sesión del usuario, a través de ReqRes API
 *
 * Envía las credenciales del usuario al endpoint de `/api/login`
 * si la autenticación es exitosa, retorna el token de acceso
 *
 * @async
 * @function signIn
 * @param {Credentials} credentials - Objeto con email y password del usuario
 * @returns {Promise<AuthToken | null>} - Promesa que resuelve con el token de acceso o `null` si falla
 * @throws {Error} Si la autenticación falla o la API devuelve un error.
 *
 */
export async function signIn(
  credentials: Credentials,
): Promise<AuthToken | null> {
  const res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!, // Asumimos que siempre está definido
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Error en la autenticación");
  }

  const data = (await res.json()) as AuthToken;

  return { token: data.token };
}
