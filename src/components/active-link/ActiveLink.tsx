"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({
  href,
  name,
  ...props
}: {
  href: string;
  name: string;
  [x: string]: unknown;
}) => {
  // const pathname = usePathname();

  // const isActive = hash === href;
  const isActive = false;

  return (
    <Link
      {...props}
      href={href}
      className={`relative  hover:text-destructive after:block 
            after:border-b after:mx-auto after:border-detext-destructive after:translate-y-1
            after:absolute after:right-[10%] after:w-0 after:ease-out after:duration-300 
            hover:after:w-[80%] hover:after:left-[10%] hover:after:right-auto  ease-in-out duration-300 ${
              isActive &&
              "text-destructive after:w-[80%] after:left-[10%] after:right-auto"
            }`}
      prefetch={false}
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
