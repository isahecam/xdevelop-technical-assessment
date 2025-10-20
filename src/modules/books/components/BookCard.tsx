"use client";

import { Book } from "@/modules/books/types/book.types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import Link from "next/link";

interface BookProps extends Omit<Book, "key"> {
  bookId: string;
}

export function BookCard({
  bookId,
  title,
  author_name,
  edition_count,
}: BookProps) {
  // Remover el "/works/" del bookId si está presente, con el fin de extraer solo el ID limpio
  if (bookId.startsWith("/works/")) {
    bookId = bookId.replace("/works/", "");
  }

  return (
    <Card>
      <CardHeader className='grow'>
        <CardTitle className='flex flex-col gap-y-1.5'>
          <Link
            href={`/books/${bookId}`}
            className='underline-offset-4 hover:text-purple-600 hover:underline'>
            <h3 className='text-sm capitalize'>{title}</h3>
          </Link>
          <div className='flex flex-col gap-y-1'>
            <span className='text-xs text-gray-500'>
              Edición: {edition_count}
            </span>
            <span className='text-xs text-gray-500'>
              Año de publicación: {edition_count}
            </span>
          </div>
        </CardTitle>

        <CardDescription className='line-clamp-2 text-xs'>
          <span className='text-gray-500'>
            Autor: {author_name ? author_name.join(", ") : "Autor desconocido"}
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
