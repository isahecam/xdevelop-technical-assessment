import { cookies } from "next/headers";

/**
 * Cerrar la sesión del usuario eliminando la cookie de sesión.
 *
 * @async
 * @return void
 */
export async function logout(): Promise<void> {
  (await cookies()).set("session", "", { expires: new Date(0) });
}
