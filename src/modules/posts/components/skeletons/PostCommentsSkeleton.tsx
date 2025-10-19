import { CommentCardSkeleton } from "@/modules/comments/skeletons/CommentCardSkeleton";

export function PostCommentsSkeleton() {
  return (
    <ul className='flex w-full flex-col gap-y-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className='contents'>
          <CommentCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
