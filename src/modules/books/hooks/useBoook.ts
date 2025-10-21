"use client";

import { getBookById } from "@/modules/books/services/getBookById";
import { Book } from "@/modules/books/types/book.types";
import { useQuery } from "@tanstack/react-query";

export function useBook(bookId: Book["key"]) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () => getBookById(bookId),
  });

  return { data, isLoading, error };
}
