"use client";

import { UserProfileContainer } from "@/modules/users/components/UserCardContainer";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import { usePost } from "../hooks/usePost";
import { Post } from "../types/post.types";
import { PostComments } from "./PostComments";
import { PostDetailsSkeleton } from "./skeletons/PostDetailsSkeleton";

export function PostDetails({ postId }: { postId: Post["id"] }) {
  const [showComments, setShowComments] = useState<boolean>(false);

  const { data, isLoading } = usePost(postId);

  if (isLoading) return <PostDetailsSkeleton />;
  if (!data) return <div>Post no encontrado</div>;

  return (
    <Card>
      <CardContent>
        <UserProfileContainer userId={data.userId} />
      </CardContent>

      <CardHeader>
        <CardTitle>
          <h3 className='capitalize'>{data.title}</h3>
        </CardTitle>

        <CardDescription>{data.body}</CardDescription>

        <CardAction>
          <Button
            size='icon'
            variant='outline'
            className='group size-8 hover:bg-purple-200 active:scale-105'
            onClick={() => setShowComments(prev => !prev)}>
            <MessagesSquare
              className='size-3 group-hover:fill-purple-600'
              fill={showComments ? "purple" : "none"}
              stroke='purple'
            />
          </Button>
        </CardAction>
      </CardHeader>

      <CardFooter>
        {showComments && <PostComments postId={postId} />}
      </CardFooter>
    </Card>
  );
}
