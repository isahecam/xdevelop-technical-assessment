import { PostDetails } from "@/modules/posts/components/PostDetails";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <section className='w-full space-y-5'>
      <h2 className='text-lg font-bold text-purple-600'>
        Detalles de la Publicación
      </h2>

      <PostDetails postId={Number(id)} />
    </section>
  );
}
