"use server";

import { loginSchema } from "@/modules/auth/schemas/loginSchema";
import { createSession, deleteSession } from "@/modules/auth/services/session";
import { signIn } from "@/modules/auth/services/authentication";
import { ActionResult } from "@/modules/auth/types/session.types";
import { redirect } from "next/navigation";

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
  try {
    // Intentamos iniciar sesión con las credenciales proporcionadas y obtenemos la información del usuario
    const {
      user: { id },
    } = await signIn({ email, password });

    // Creamos una session del usuario almacenando el id en una cookie HTTP-only
    await createSession(id.toString()!);
  } catch (error: unknown) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error al iniciar sesión",
    };
  }

  return { success: true, message: "Inicio de sesión exitoso" };
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
