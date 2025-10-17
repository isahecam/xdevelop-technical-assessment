/** Representa el resultado de una acción del servidor */
export interface ActionResult {
  success: boolean;
  message?: string;
}

/** Representa el estado de sesión persistida (cookie, JWT, etc.) */
export interface Session {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}
