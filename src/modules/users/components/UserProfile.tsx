import { LogoutButton } from "@/modules/auth/components/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/shared//ui";
import { User } from "../types/user.types";

export function UserProfile({
  first_name,
  last_name,
  avatar,
  email,
  role,
}: Pick<User, "first_name" | "last_name" | "avatar" | "email" | "role">) {
  return (
    <article className='flex grow flex-col items-end'>
      <div className='flex items-center justify-end gap-x-4'>
        <Avatar className='size-20'>
          <AvatarImage src={avatar} alt={`${first_name}'s Avatar`} />
          <AvatarFallback>{first_name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col items-end'>
          <p className='text-center text-xl text-gray-600'>
            Hola,{" "}
            <strong>
              {first_name} {last_name}
            </strong>
          </p>
          <span>{email}</span>
          <Badge variant={role?.id === "admin" ? "admin" : "user"}>
            {role?.name}
          </Badge>
        </div>
      </div>
      <LogoutButton />
    </article>
  );
}
