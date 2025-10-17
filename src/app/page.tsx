import { LoginForm } from "@/modules/auth/components/LoginForm";

export default async function Home() {
  return (
    <main className='mx-auto grid min-h-screen max-w-4xl place-content-center items-center gap-y-12 p-4'>
      <h1 className='text-center text-xl font-bold text-purple-700'>
        Prueba Técnica — Frontend con Next.js
      </h1>

      <section className='mx-auto w-full max-w-80'>
        <LoginForm />
      </section>
    </main>
  );
}
