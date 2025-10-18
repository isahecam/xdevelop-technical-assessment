"use client";
import { getUsers } from "@/app/_actions/get-users";
import { User } from "@/modules/users/types/user.types";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./colums";

export function UsersTable() {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error al cargar los usuarios.</div>;

  return <DataTable columns={columns} data={data ?? []} />;
}
