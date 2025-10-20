"use server";

import {
  Book,
  OpenLibraryResponse,
  SearchAPIParams,
} from "@/modules/books/types/book.types";

export async function getFilteredBooks({
  query,
  page,
  limit = 10,
}: SearchAPIParams): Promise<Book[] | null> {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${limit}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: OpenLibraryResponse = await response.json();
  return data.docs;
}
