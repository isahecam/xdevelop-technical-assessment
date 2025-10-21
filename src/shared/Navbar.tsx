import Link from "next/link";

export interface NavLink {
  id: number;
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { id: 1, label: "Login", to: "/" },
  { id: 2, label: "Users", to: "/users" },
  { id: 3, label: "Posts", to: "/posts" },
  { id: 4, label: "Books", to: "/books" },
  { id: 5, label: "Posts Favoritos", to: "/posts/favorites" },
];

export function Navbar() {
  return (
    <nav className='flex flex-col items-start gap-y-4'>
      <span className='text-center text-xl font-bold text-purple-700'>
        Prueba Técnica — Frontend con Next.js
      </span>
      <ul className='flex items-center gap-x-4'>
        {navLinks.map(({ id, label, to }) => (
          <li key={id} className='contents'>
            <Link
              href={to}
              className='font-semibold text-purple-600 underline-offset-4 hover:underline'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
