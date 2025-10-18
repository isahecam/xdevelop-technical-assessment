import { JWTPayload, SignJWT, jwtVerify } from "jose";

/**
 * Clave secreta para firmar y verificar los JWT
 */
const secretKey = process.env.JWT_SECRET_KEY!;
const key = new TextEncoder().encode(secretKey);

/**
 * Función para encriptar el cuerpo del JWT
 * @param payload - Cuerpo del JWT
 * @returns - Token JWT encriptado
 */
export async function encryptToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15 minutes")
    .sign(key);
}

/**
 * Función para verificar y decodificar un token JWT
 * @param token - Token JWT a verificar
 * @returns - Cuerpo decodificado del JWT
 */
export async function decryptToken(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
