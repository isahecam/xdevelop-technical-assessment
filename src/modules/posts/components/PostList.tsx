"use client";

import { usePost } from "../hooks/usePost";
import { PostCard } from "./PostCard";
import { PostListSkeleton } from "./skeletons/PostSkeletons";

export function PostList() {
  const { data, isLoading, error } = usePost();

  if (isLoading) return <PostListSkeleton />;
  if (error) return <div>Error al cargar las publicaciones.</div>;

  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {data?.map(post => (
        <li key={post.id} className='contents'>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
