"use client";

import { useBook } from "@/modules/books/hooks/useBoook";
import { BookDetailsSkeleton } from "@/modules/books/skeletons/BookDetailsSkeleton";
import { Book } from "@/modules/books/types/book.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

export function BookDetails({ bookId }: { bookId: Book["key"] }) {
  const { data, isLoading } = useBook(bookId);

  if (isLoading) return <BookDetailsSkeleton />;
  if (!data) return <div>Libro no encontrado.</div>;

  return (
    <div className='flex w-full justify-center p-6'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='text-md mb-1'>{data.title}</CardTitle>
          <CardDescription className='mb-2 text-sm text-gray-500'>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.description?.value ||
                  data.description ||
                  "No description",
              }}
            />
          </CardDescription>
        </CardHeader>
        <CardContent className='flex p-3'>
          <Image
            src={
              data?.covers?.length > 0
                ? `https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`
                : "https://placehold.co/600x400"
            }
            unoptimized
            priority={true}
            alt='Book Cover'
            width={150}
            height={200}
            className='aspect-auto h-auto w-56 rounded-md object-cover'
          />
          <div className='flex flex-col gap-y-2 px-6 text-sm'>
            <p className='flex gap-x-2'>
              <strong>Fecha de publicación:</strong>
              {data.first_publish_date || "No disponible"}
            </p>

            <p className='flex gap-x-2'>
              <strong>Reseña:</strong>
              {data?.excerpts?.[0]?.excerpt || "No disponible"}
            </p>
            <div>
              <h5 className='font-bold'>Enlaces:</h5>
              <ul>
                {data?.links?.length > 0 ? (
                  data?.links?.map(link => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 ring-offset-4 hover:underline'>
                        {link.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No hay enlaces disponibles</li>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
