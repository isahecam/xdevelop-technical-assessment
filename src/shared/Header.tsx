import { getSession } from "@/modules/auth/services/session";
import { UserProfile } from "@/modules/users/components/UserProfile";
import { getUser } from "@/modules/users/services/getUser";
import { redirect } from "next/navigation";

export async function Header() {
  const session = await getSession();
  if (!session) redirect("/");

  const user = await getUser(parseInt(session.userId));
  if (!user) redirect("/");

  return (
    <header className='inline-flex items-center gap-x-2'>
      <h1 className='text-center text-xl font-bold text-purple-700'>
        Prueba Técnica — Frontend con Next.js
      </h1>

      <UserProfile {...user} />
    </header>
  );
}
