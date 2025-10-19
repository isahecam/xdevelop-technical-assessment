export interface Rol {
  id: string;
  name: string;
}

export function getRandomRole(): Rol {
  const roles: Rol[] = [
    { id: "admin", name: "Administrador" },
    { id: "user", name: "Usuario" },
  ];

  const randomRole = roles[Math.floor(Math.random() * roles.length)];
  return randomRole;
}
