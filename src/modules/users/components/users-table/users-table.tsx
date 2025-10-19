"use client";

import { getAllUsers } from "@/modules/users/services/getAllUsers";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./colums";
import { DataTable } from "./data-table";

export function UsersTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isLoading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error al cargar los usuarios.</div>;

  return <DataTable columns={columns} data={data ?? []} />;
}
