"use client";

import { PostCard } from "@/modules/posts/components/PostCard";
import { useFavoritePostsStore } from "@/modules/posts/store/favoritePosts.store";

export function FavoritePostsList() {
  const { favoritePosts } = useFavoritePostsStore();

  if (favoritePosts.length === 0)
    return <div>No hay publicaciones favoritas.</div>;

  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {favoritePosts.map(post => (
        <li key={post.id} className='contents'>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
