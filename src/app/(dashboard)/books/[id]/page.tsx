import { BookDetails } from "@/modules/books/components/BookDetails";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <section className='w-full space-y-5'>
      <h2 className='text-lg font-bold text-purple-600'>Detalles del libro</h2>

      <BookDetails bookId={id} />
    </section>
  );
}
