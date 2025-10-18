import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared//ui";
import { User } from "../types/user.types";

export function UserProfile({
  first_name,
  last_name,
  avatar,
  email,
}: Pick<User, "first_name" | "last_name" | "avatar" | "email">) {
  return (
    <article className='flex grow flex-col items-end'>
      <div className='flex items-center justify-end gap-x-4'>
        <Avatar className='size-20'>
          <AvatarImage src={avatar} alt={`${first_name}'s Avatar`} />
          <AvatarFallback>{first_name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className='text-center text-xl text-gray-600'>
            Hola,{" "}
            <strong>
              {first_name} {last_name}
            </strong>
          </p>
          <span>{email}</span>
        </div>
      </div>
      <Button
        size='sm'
        className='max-w-max rounded-full bg-purple-700 px-4 py-2 text-white'>
        Cerrar sesión
      </Button>
    </article>
  );
}
