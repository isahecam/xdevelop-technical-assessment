import { type NextRequest } from "next/server";
import { updateSession } from "./modules/auth/services/session";
import { middlewareAuth } from "./modules/auth/services/middleware";

/**
 * Middleware para manejar la sesión del usuario,
 * así como la actualización de tiemp del token JWT.
 * @param request - NextRequest del usuario
 * @returns Respuesta con la sesión y el token JWT actualizados
 */
export async function middleware(request: NextRequest) {
  const authResponse = await middlewareAuth(request);
  if (authResponse) {
    return authResponse;
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
