// Representa las credenciales necesarias para el inicio de sesión
export interface Credentials {
  email: string;
  password: string;
}

// Representa el token de autenticación devuelto tras un inicio de sesión exitoso
export interface AuthToken {
  token: string;
}

// Representa el resultado de una operación de autenticación
export interface AuthResult {
  success: boolean;
  message?: string;
}
