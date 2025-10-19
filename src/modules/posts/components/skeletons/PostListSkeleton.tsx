import { PostCardSkeleton } from "./PostCardSkeleton";

export function PostListSkeleton() {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className='contents'>
          <PostCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
