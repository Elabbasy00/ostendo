"use client";
import { Button } from "@/src/components/ui/button";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/src/components/ui/sheet";

import Image from "next/image";
import Link from "next/link.js";

import { useCallback } from "react";
import ActiveLink from "../active-link/ActiveLink";

export default function Navbar() {
  // Function to handle smooth scrolling
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <header className="backdrop-blur-sm absolute top-0 z-50 w-full bg-white/5 overflow-hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/Logo-white.png"
            alt="Pons"
            width={90}
            height={90}
            priority
            style={{ width: "110px", height: "40px" }}
            className="object-contain"
          />
          <span className="sr-only">IBC</span>
        </Link>
        <nav className="hidden items-center h-full gap-5 text-md xl:text-xl font-medium lg:flex">
          <ActiveLink
            href="/"
            name="Home"
            onClick={() => scrollToSection("home")}
          >
            Home
          </ActiveLink>
          <ActiveLink
            name="About Us"
            href="#about"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </ActiveLink>
          <ActiveLink
            href="#services"
            name="Services"
            onClick={() => scrollToSection("services")}
            className="hover:text-primary2 ease-in-out duration-300"
          >
            Services
          </ActiveLink>
          <ActiveLink
            name="Contact Us"
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary2 ease-in-out duration-300"
          >
            Contact Us
          </ActiveLink>
        </nav>
        <div className="flex items-center gap-4 h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="rounded-full lg:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="lg:hidden bg-white border-none"
            >
              <SheetTitle className="mt-4">
                <Image
                  src="/logo.png"
                  alt="Pons"
                  width={90}
                  height={90}
                  priority
                  style={{ width: "110px", height: "40px" }}
                  className="object-contain"
                />
              </SheetTitle>
              <SheetDescription className="hidden">
                Pons Communication Menu
              </SheetDescription>
              <div className="grid gap-4 p-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-primary font-bold  hover:text-primary2 ease-in-out duration-300"
                    prefetch={false}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#about"
                    onClick={() => scrollToSection("about")}
                    className="text-primary font-bold  hover:text-primary2 ease-in-out duration-300"
                    prefetch={false}
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#services"
                    onClick={() => scrollToSection("services")}
                    className="text-primary font-bold  hover:text-primary2 ease-in-out duration-300"
                    prefetch={false}
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    onClick={() => scrollToSection("contact")}
                    className="text-primary font-bold  hover:text-primary2 ease-in-out duration-300"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: { className: string }) {
  return (
    <svg
      {...props!}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
