"use server";

import { BookDetails } from "@/modules/books/types/book.types";

export async function getBookById(
  bookId: BookDetails["key"],
): Promise<BookDetails | null> {
  const response = await fetch(`https://openlibrary.org/works/${bookId}.json`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  const data: BookDetails = await response.json();

  return data;
}
