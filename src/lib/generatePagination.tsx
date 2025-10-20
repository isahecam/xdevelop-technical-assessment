/**
 * Función para generar la paginación con puntos suspensivos, dada la página actual y el total de páginas.
 * si hay muchas páginas, se muestran puntos suspensivos para indicar las páginas omitidas.
 * @param currentPage - número de la página actual
 * @param totalPages - numero total de páginas
 * @param delta - número de páginas a mostrar alrededor de la página actual
 * @returns un array con los números de página y puntos suspensivos
 */
export function generatePagination(
  currentPage: number,
  totalPages: number,
  delta = 2,
): (number | "...")[] {
  // Funcion para determinar si una página es límite (primera o última)
  const isBoundary = (page: number) => page === 1 || page === totalPages;

  // Función para determinar si una página está cerca de la página actual
  const isNearCurrent = (page: number) => Math.abs(page - currentPage) <= delta;

  const pages: (number | "...")[] = [];

  for (let page = 1; page <= totalPages; page++) {
    if (isBoundary(page) || isNearCurrent(page)) {
      pages.push(page);
    } else if (pages.at(-1) !== "...") {
      pages.push("...");
    }
  }

  return pages;
}
