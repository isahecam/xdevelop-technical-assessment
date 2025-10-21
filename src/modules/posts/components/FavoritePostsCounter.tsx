"use client";

import { useFavoritePostsStore } from "@/modules/posts/store/favoritePosts.store";

export function FavoritePostsCounter() {
  const { favoritePosts } = useFavoritePostsStore();

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm font-medium'>Posts Favoritos:</span>
      <span className='text-sm text-muted-foreground'>
        {favoritePosts.length}
      </span>
    </div>
  );
}
