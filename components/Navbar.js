import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninja.png" alt="logo" width={70} height={70} />
      </div>
      <div className="navlinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninja">Ninja Listings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
