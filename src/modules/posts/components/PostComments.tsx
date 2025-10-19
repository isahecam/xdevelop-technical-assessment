import { CommentCard } from "@/modules/comments/components/CommentCard";
import { useComments } from "@/modules/comments/hooks/useComments";
import { Comment } from "@/modules/comments/types/comment.types";
import { PostCommentsSkeleton } from "./skeletons/PostCommentsSkeleton";

export function PostComments({ postId }: { postId: Comment["postId"] }) {
  const { data, isLoading, error } = useComments(postId);

  if (isLoading) return <PostCommentsSkeleton />;
  if (error)
    return <div>Error al cargar los comentarios de la publicación.</div>;

  return (
    <ul className='flex w-full flex-col gap-y-4'>
      {data?.map(comment => (
        <li key={comment.id} className='contents'>
          <CommentCard {...comment} />
        </li>
      ))}
    </ul>
  );
}
