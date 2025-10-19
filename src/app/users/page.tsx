import { getSession } from "@/modules/auth/services/session";
import { UsersTable } from "@/modules/users/components/users-table/users-table";
import { UserProfile } from "@/modules/users/components/UserProfile";
import { getUser } from "@/modules/users/services/getUser";
import { redirect } from "next/navigation";

export default async function Users() {
  const session = await getSession();
  if (!session) redirect("/");

  const user = await getUser(parseInt(session.userId));
  if (!user) redirect("/");

  return (
    <main className='mx-auto grid min-h-screen max-w-4xl gap-y-12 p-4'>
      <header className='inline-flex items-center gap-x-2'>
        <h1 className='text-center text-xl font-bold text-purple-700'>
          Página de Usuarios - (Página Protegida)
        </h1>

        <UserProfile {...user} />
      </header>

      <UsersTable />
    </main>
  );
}
