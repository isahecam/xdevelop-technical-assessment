import { FavoritePostsList } from "@/modules/posts/components/FavoritePostsList";

export default async function FavoritePostsPage() {
  return (
    <section className='w-full space-y-5'>
      <h2 className='text-lg font-bold text-purple-600'>
        Publicaciones Favoritas
      </h2>

      <FavoritePostsList />
    </section>
  );
}
