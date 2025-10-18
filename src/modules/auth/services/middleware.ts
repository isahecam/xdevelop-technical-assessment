import { getSession } from "./session";
import { NextResponse, type NextRequest } from "next/server";

// Especificación de rutas publicas y privadas
const PROTECTED_ROUTES = ["/users"];
const PUBLIC_ROUTES = ["/", "/login"];

export async function middlewareAuth(request: NextRequest) {
  const session = await getSession();

  // Revisar si la ruta actual es protegida o pública
  const path = request.nextUrl.pathname;

  // Revisar si la ruta es protegida o pública
  const isProtectedRoute = PROTECTED_ROUTES.includes(path);
  const isPublicRoute = PUBLIC_ROUTES.includes(path);

  // Redirigir según el estado de autenticación y la ruta solicitada
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL("/users", request.url));
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
