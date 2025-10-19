"use client";

import { getRandomRole } from "@/lib/getRandomRole";
import { User } from "@/modules/users/types/user.types";
import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/shared/ui";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    header: "ID",
    accessorKey: "id",
    filterFn: "equalsString",
  },
  {
    header: "Correo",
    accessorKey: "email",
    filterFn: "includesStringSensitive",
  },
  {
    header: "Nombre completo",
    accessorFn: row => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "Rol",
    accessorKey: "role",
    cell: ({ row }) => {
      const { id, name } = getRandomRole();
      return <Badge variant={id === "admin" ? "admin" : "user"}>{name}</Badge>;
    },
  },
  {
    header: "Avatar",
    accessorKey: "avatar",

    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage
            src={row.getValue("avatar")}
            alt="User's avatar"></AvatarImage>
          <AvatarFallback></AvatarFallback>
        </Avatar>
      );
    },
  },
];
