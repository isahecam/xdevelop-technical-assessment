import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <nav className='flex flex-col items-start gap-y-4'>
      <span className='text-center text-xl font-bold text-purple-700'>
        Prueba Técnica — Frontend con Next.js
      </span>
      <NavLinks />
    </nav>
  );
}
