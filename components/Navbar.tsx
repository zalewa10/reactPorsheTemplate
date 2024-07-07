"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navigationBar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navigationBar.classList.add("bg-white", "shadow-md", "top-5");
        navigationBar.classList.remove(
          "bg-transparent",
          "shadow-none",
          "top-0"
        );
      } else {
        navigationBar.classList.add("bg-transparent", "shadow-none", "top-0");
        navigationBar.classList.remove("bg-white", "shadow-md", "top-5");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`max-w-screen-xl mx-auto px-10 py-5 z-10 fixed left-0 right-0 h-20 rounded-xl transition-all ease-in-out duration-500`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            src="/porsche.jpg"
            width={100}
            height={20}
            className="h-auto w-auto"
            alt="logo"
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button type="button" variant={"ghost"} className="mr-3">
            Log in
          </Button>
          <Button type="button" variant={"default"}>
            Create account
          </Button>
        </div>
      </div>
    </nav>
  );
}
