"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const Links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-10 h-14 items-center">
      <Link href="/">
        <FaBug name="bug" />
      </Link>

      <ul className="flex mx-5 space-x-6">
        {Links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
