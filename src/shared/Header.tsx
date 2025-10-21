import { getSession } from "@/modules/auth/services/session";
import { UserProfile } from "@/modules/users/components/UserProfile";
import { getUser } from "@/modules/users/services/getUser";
import { redirect } from "next/navigation";
import { Navbar } from "./Navbar";

export async function Header() {
  const session = await getSession();
  if (!session) redirect("/");

  const user = await getUser(parseInt(session.userId));
  if (!user) redirect("/");

  return (
    <header className='inline-flex items-center gap-x-2'>
      <Navbar />
      <UserProfile {...user} />
    </header>
  );
}
