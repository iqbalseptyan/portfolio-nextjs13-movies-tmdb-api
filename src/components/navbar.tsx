import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 h-16 flex px-5 gap-5 z-10 bg-black w-full">
      <Link href={"/"} className="my-auto">
        <Image
          src="/imdb.svg"
          width={72}
          height={72}
          alt="Picture of the author"
        />
      </Link>
      <ul className="flex items-center gap-5 text-xl">
        <li>
          <Link href={"popular"}>Popular</Link>{" "}
        </li>
        <li>Top Rated</li>
        <li>Upcoming</li>
      </ul>
    </header>
  );
};

export default Navbar;
