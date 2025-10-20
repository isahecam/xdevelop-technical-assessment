import { getFilteredBooks } from "@/modules/books/services/getFilteredBooks";
import { BookCard } from "./BookCard";

interface Props {
  query: string;
  currentPage?: number;
  limit?: number;
}

export async function BookList({ query, currentPage, limit }: Props) {
  const books = await getFilteredBooks({ query, page: currentPage, limit });

  if (query === "") {
    return <p>Ingresa un término de búsqueda para encontrar libros.</p>;
  }

  if (books?.length === 0) {
    return <p>No se encontraron libros que coincidan con tu búsqueda.</p>;
  }

  return (
    <ul className='grid grow grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {books?.map(({ key, ...book }) => (
        <li key={key} className='contents'>
          <BookCard bookId={key} {...book} />
        </li>
      ))}
    </ul>
  );
}
