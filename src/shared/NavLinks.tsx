"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  id: number;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 1, label: "Login", href: "/" },
  { id: 2, label: "Users", href: "/users" },
  { id: 3, label: "Posts", href: "/posts" },
  { id: 4, label: "Books", href: "/books" },
  { id: 5, label: "Posts Favoritos", href: "/posts/favorites" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className='flex items-center gap-x-4'>
      {navLinks.map(({ id, label, href }) => (
        <li key={id} className='contents'>
          <Link
            href={href}
            className={cn(
              "text-purple-600 underline-offset-4 hover:underline",
              pathname === href ? "font-bold underline" : "no-underline",
            )}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
