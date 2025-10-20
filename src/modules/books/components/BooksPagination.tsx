"use client";

import { generatePagination } from "@/lib/generatePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export function BooksPagination({ totalPages }: { totalPages: number | null }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = generatePagination(currentPage, totalPages || 0);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      const prevPageURL = createPageURL(prevPage);
      window.location.href = prevPageURL;
    }
  };

  const handleNextPage = () => {
    if (currentPage < (totalPages || 0)) {
      const nextPage = currentPage + 1;
      const nextPageURL = createPageURL(nextPage);
      window.location.href = nextPageURL;
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={` ${currentPage === 1 ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>

        {/*Elementos de paginación, como números de página y elipsis */}
        {pages.map((page, index) => {
          return page === "..." ? (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem
          className={` ${currentPage === totalPages ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
