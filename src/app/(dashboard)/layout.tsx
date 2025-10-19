import { getSession } from "@/modules/auth/services/session";
import { Header } from "@/shared/Header";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session) redirect("/");

  return (
    <div className='mx-auto flex min-h-screen max-w-4xl flex-col gap-y-12 p-4'>
      <Header />
      <main className='grow items-start'>{children}</main>
    </div>
  );
}
