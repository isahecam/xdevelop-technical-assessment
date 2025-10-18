import { type NextRequest } from "next/server";
import { updateSession } from "./modules/auth/services/session";

/**
 * Middleware para manejar la sesión del usuario,
 * así como la actualización de tiemp del token JWT.
 * @param request - NextRequest del usuario
 * @returns Respuesta con la sesión actualizada
 */
export async function middleware(request: NextRequest) {
  // Actualizar la sesión del usuario en cada solicitud
  console.log("Middleware is executing...");
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
