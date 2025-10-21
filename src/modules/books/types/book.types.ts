export interface OpenLibraryResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: null;
  docs: Book[];
}

export interface Book {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  cover_i: number;
  ebook_access: string;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  key: string;
  language: string[];
  public_scan_b: boolean;
  title: string;
}

export interface SearchAPIParams {
  query?: string;
  page?: number;
  limit?: number;
}

// Tipado para la respuesta de la API de detalles del libro
export interface BookDetails {
  description: Description;
  links: Link[];
  title: string;
  covers: number[];
  subject_places: string[];
  first_publish_date: string;
  subject_people: string[];
  key: string;
  authors: Author[];
  excerpts: Excerpt[];
  subjects: string[];
  type: Type;
  subject_times: string[];
  cover_edition: Type;
  latest_revision: number;
  revision: number;
  created: Description;
  last_modified: Description;
}

export interface Excerpt {
  pages?: string;
  excerpt: string;
  author: Type;
  comment?: string;
}

export interface Author {
  author: Type;
  type: Type;
}

export interface Link {
  title: string;
  url: string;
  type: Type;
}

export interface Type {
  key: string;
}

export interface Description {
  type: string;
  value: string;
}
