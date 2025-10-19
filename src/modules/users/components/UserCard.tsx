import { User } from "@/modules/users/types/user.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";

export function UserCard({
  avatar,
  email,
  first_name,
  last_name,
}: Pick<User, "first_name" | "last_name" | "avatar" | "email">) {
  return (
    <div className='flex items-center space-x-2 text-sm'>
      <Avatar className='size-10'>
        <AvatarImage src={avatar} alt={`${first_name} ${last_name}'s avatar`} />
        <AvatarFallback>{first_name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className='leading-none'>
        <h4 className='text-sm font-bold'>
          {first_name} {last_name}
        </h4>
        <span className='text-xs'>{email}</span>
      </div>
    </div>
  );
}
