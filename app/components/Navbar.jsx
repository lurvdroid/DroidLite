"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full p-4 shadow bg-white dark:bg-gray-800 flex justify-between items-center">
      <p className="font-bold text-lg">DroidLite</p>
      <ThemeToggle />
    </nav>
  );
}
