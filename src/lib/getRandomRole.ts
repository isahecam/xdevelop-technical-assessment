import { Role } from "@/modules/users/types/user.types";

export const roles: Role[] = [
  { id: "admin", name: "Administrador" },
  { id: "user", name: "Usuario" },
];

export function getRandomRole(): Role {
  const randomRole = roles[Math.floor(Math.random() * roles.length)];
  return randomRole;
}
