"use client";

import { login } from "@/app/_actions/auth";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/shared/ui/";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { SubmitButton } from "./SubmitButton";

export function LoginForm() {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (formData: FormData) => {
    const result = await login(formData);
    if (!result.success) {
      alert(`${result.message}`);
    } else {
      router.push("/users");
      alert("Inicio de sesión exitoso");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>
          Ingresa tu correo y contraseña para iniciar sesión en tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className='space-y-6' ref={formRef} action={handleLogin}>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Correo</Label>
              <Input
                name='email'
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='Tu contraseña'
                required
              />
            </div>
          </div>
          <SubmitButton type='submit' className='w-full bg-purple-800'>
            Iniciar sesión
          </SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
}
