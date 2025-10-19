import { Post } from "@/modules/posts/types/post.types";
import { UserProfileContainer } from "@/modules/users/components/UserCardContainer";
import {
  Button,
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { Heart } from "lucide-react";
import Link from "next/link";

export function PostCard({
  id,
  title,
  body,
  userId,
}: Pick<Post, "id" | "title" | "body" | "userId">) {
  return (
    <Card>
      <CardHeader className='grow'>
        <CardTitle>
          <Link
            href={`/posts/${id}`}
            className='underline-offset-4 hover:text-purple-600 hover:underline'>
            <h3 className='text-sm capitalize'>{title}</h3>
          </Link>
        </CardTitle>

        <CardDescription className='line-clamp-2 text-xs'>
          {body}
        </CardDescription>

        <CardAction>
          <Button
            size='icon'
            variant='outline'
            className='group size-8 hover:bg-red-200 active:scale-105'>
            <Heart className='size-3 group-hover:fill-red-500' stroke='red' />
          </Button>
        </CardAction>
      </CardHeader>

      <CardFooter>
        <UserProfileContainer userId={userId} />
      </CardFooter>
    </Card>
  );
}
