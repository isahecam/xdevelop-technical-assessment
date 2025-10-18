import {
  AuthResponse,
  AuthToken,
  Credentials,
} from "@/modules/auth/types/auth.types";
import { UserResponse } from "@/modules/users/types/user.types";
import "server-only";

/**
 * Inicio de sesión del usuario, a través de ReqRes API
 *
 * Envía las credenciales del usuario al endpoint de `/api/login`
 * si la autenticación es exitosa, retorna el token de acceso
 *
 * @async
 * @function signIn
 * @param {Credentials} credentials - Objeto con email y password del usuario
 * @returns {Promise<AuthResponse | null>} - Promesa que resuelve el token de autenticación y la información del usuario, o null si falla
 * @throws {Error} Si la autenticación falla o la API devuelve un error.
 *
 */
export async function signIn(credentials: Credentials): Promise<AuthResponse> {
  // Petición al endpoint de login de ReqRes, (no retorna usuario, solo el token)
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

  // Extraemos el token de la respuesta
  const token = (await res.json()) as AuthToken;

  // Simulamos la obtención de la data del usuario autenticado
  const userRes = await fetch("https://reqres.in/api/users/1", {
    method: "GET",
    headers: {
      "x-api-key": process.env.REQRES_API_KEY!,
    },
  });

  const response: UserResponse = await userRes.json();

  if (!response.data) {
    throw new Error("Error al obtener la información del usuario");
  }

  return { token, user: response.data };
}
