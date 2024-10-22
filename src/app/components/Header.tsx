import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full h-20 bg-blue-500 border-b-2 shadow-lg flex justify-between px-3 items-center space-x-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Sarim</h1>
      <div className="space-x-5 flex items-center text-white sm:text-lg text-xs">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="career">Career</Link>
        <Link href="project">Projects</Link>
      </div>
    </header>
  );
}

export default Header;
