"use server";

import {
  OpenLibraryResponse,
  SearchAPIParams,
} from "@/modules/books/types/book.types";

export async function getBooksPages({
  query,
  limit = 10,
}: SearchAPIParams): Promise<number | null> {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: OpenLibraryResponse = await response.json();

  // Calcular el número total de páginas
  const totalPages = Math.ceil(data.numFound / limit);

  return totalPages;
}
