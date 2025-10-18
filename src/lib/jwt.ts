import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "@/modules/auth/types/session.types";

/**
 * @constant {string} secretKey - Clave secreta para JWT firmar y
 * verificar los JWT de sesión
 */
const secretKey = process.env.SESSION_SECRET!;

/**
 * @constant {Uint8Array} encodedKey - Clave convertida a formato Uint8Array,
 * para usarse en en el algoritmo de firma (HS256).
 */
const encodedKey = new TextEncoder().encode(secretKey);

/**
 * Función para encriptar el cuerpo del JWT de sesión
 * @param payload - Cuerpo del JWT
 * @returns - Token JWT encriptado
 */
export async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

/**
 * Función para verificar y desencriptar el token JWT de sesión
 * @param session - Token JWT de la sesión a verificar, por defecto cadena vacía
 * @returns - Cuerpo decodificado del JWT o null si falla
 */
export async function decrypt(
  session: string | undefined = "",
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    console.log("Failed to verify session");
    return null;
  }
}
