import { LogOut } from "lucide-react";
import { SubmitButton } from "./SubmitButton";
import { logout } from "@/app/_actions/auth";

export function LogoutButton() {
  return (
    <form action={logout}>
      <SubmitButton
        size='sm'
        className='max-w-max rounded-full bg-purple-700 px-4 py-2 text-white'>
        <LogOut className='size-4' />
        Cerrar sesión
      </SubmitButton>
    </form>
  );
}
