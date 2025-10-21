import { FavoritePostsCounter } from "@/modules/posts/components/FavoritePostsCounter";
import { FavoritePostsList } from "@/modules/posts/components/FavoritePostsList";

export default async function FavoritePostsPage() {
  return (
    <section className='w-full space-y-5'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold text-purple-600'>
          Publicaciones Favoritas
        </h2>
        <FavoritePostsCounter />
      </div>

      <FavoritePostsList />
    </section>
  );
}
