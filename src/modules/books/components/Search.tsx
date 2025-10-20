"use client";

import { Input } from "@/shared/ui";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  const searchParams = useSearchParams(); // Obtener los query params actuales
  const pathname = usePathname(); // Obtener la ruta actual
  const { replace } = useRouter(); // Hook para reemplazar la URL

  /**
   * Maneja la búsqueda con debounce para evitar múltiples llamadas por cada tecla presionada.
   * @param term Término de búsqueda ingresado por el usuario
   */
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams); // Clonar los query params actuales para modificarlos
    params.set("page", "1");

    // Actualizar el query param 'query' con el término de búsqueda
    if (!term) {
      params.delete("query");
    } else {
      params.set("query", term);
    }

    // Reemplazar la URL sin recargar la página
    replace(`${pathname}?${params.toString()}`);
  }, 500); // 500 ms de debounce

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <Input
        id='search'
        type='search'
        className='peer block w-full rounded-md border border-gray-200 py-2 ps-10 pe-3 text-sm outline-2 placeholder:text-gray-500'
        placeholder='Buscar un libro... 📖'
        onChange={e => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon className='absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
    </div>
  );
}
