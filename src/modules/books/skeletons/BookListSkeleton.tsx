import { BookCardSkeleton } from "./BookCardSkeleton";

export function BookListSkeleton() {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className='contents'>
          <BookCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
