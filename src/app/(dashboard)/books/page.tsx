import { BookList } from "@/modules/books/components/BookList";
import { BooksPagination } from "@/modules/books/components/BooksPagination";
import { Search } from "@/modules/books/components/Search";
import { getBooksPages } from "@/modules/books/services/getBooksPages";
import { BookListSkeleton } from "@/modules/books/skeletons/BookListSkeleton";
import { Suspense } from "react";

interface Props {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function BooksPage(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getBooksPages({ query });

  return (
    <section className='flex flex-col gap-y-5'>
      <h2 className='text-lg font-bold text-purple-600'>Buscador de libros</h2>
      <Search />
      <Suspense key={query + currentPage} fallback={<BookListSkeleton />}>
        <BookList query={query} currentPage={currentPage} />
      </Suspense>

      {query !== "" && <BooksPagination totalPages={totalPages} />}
    </section>
  );
}
