"use client";

import { PostCard } from "@/modules/posts/components/PostCard";
import { PostListSkeleton } from "@/modules/posts/components/skeletons/PostListSkeleton";
import { usePosts } from "@/modules/posts/hooks/usePosts";

export function PostList() {
  const { data, isLoading, error } = usePosts();

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
