/** Representa el resultado de una acción del servidor */
export interface ActionResult {
  success: boolean;
  message?: string;
}

/** Representa el payload almacenado en el JWT de sesión */
export interface SessionPayload {
  sub: string;
  name: string;
  email: boolean;
  iat: number;
}
