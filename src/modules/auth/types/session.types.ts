/** Representa el resultado de una acción del servidor */
export interface ActionResult {
  success: boolean;
  message?: string;
}

/** Representa la sesión del usuario */
export interface UserSession {
  userId: string;
  expiresAt: string;
  iat: number;
  exp: number;
}
