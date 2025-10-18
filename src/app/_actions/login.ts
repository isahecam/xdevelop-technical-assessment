"use server";

import { encryptToken } from "@/lib/jwt";
import { loginSchema } from "@/modules/auth/schemas/loginSchema";
import { signIn } from "@/modules/auth/services/signIn";
import { ActionResult } from "@/modules/auth/types/session.types";
import { cookies } from "next/headers";

/**
 * Server action que maneja el inicio de sesión de un usuario
 *
 * Obtiene los datos del formulario de inicio de sesión como un FormData,
 * los convierte a un objeto simple, parsea los datos del objeto usando el loginSchema,
 * y llama a la función signIn para autenticar al usuario indicando un resultado de éxito o error.
 *
 * @async
 * @param {FormData} formData - Datos del formulario de inicio de sesión
 * @returns {Promise<ActionResult>} - Promesa que resuelve void en caso de éxito o un ActionResult en caso de error
 */

export async function login(formData: FormData): Promise<ActionResult> {
  const valuesFormData = Object.fromEntries(formData.entries());

  const {
    success,
    error: validationError,
    data,
  } = loginSchema.safeParse(valuesFormData);

  if (!success) {
    return { success: false, message: validationError.message };
  }

  // Obtenemos email y password de los datos validados
  const { email, password } = data;

  // Realizamos el intento de inicio de sesión, obteniendo el token de autenticación
  const externalAuth = await signIn({ email, password });

  // Si no se obtiene un token, retornamos un error
  if (!externalAuth?.token) {
    return { success: false, message: "Error al iniciar sesión" };
  }

  // Creamos una session del usuario almacenando el token en una cookie HTTP-only
  const expires = new Date(Date.now() + 10 * 1000); // Expiración de la cookie en 10 segundos
  const session = await encryptToken({ token: externalAuth?.token, expires }); // Encriptamos el access con JWT

  // Almacenamos la cookie de sesión, HTTP-only
  (await cookies()).set("session", session, { expires, httpOnly: true });

  return { success: true };
}
