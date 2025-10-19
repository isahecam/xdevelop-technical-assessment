import { PostList } from "@/modules/posts/components/PostList";

export default async function PostsPage() {
  return (
    <section className='w-full space-y-5'>
      <h2 className='text-lg font-bold text-purple-600'>
        Todas las publicaciones
      </h2>

      <PostList />
    </section>
  );
}
