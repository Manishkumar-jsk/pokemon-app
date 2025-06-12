import React from "react";
import Link from "next/link";

const Breadcrumb = ({ name }: { name?: string }) => {
  return (
    <nav className="flex text-sm text-gray-600 mb-4 gap-1">
      <Link href="/" className="no-underline text-black">
        <span>Home</span>
      </Link>
      /<span className="capitalize cursor-pointer">{name}</span>
    </nav>
  );
};

export default Breadcrumb;
