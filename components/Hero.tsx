import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src="/grid.jpg"
        alt="grid"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 right-0 mx-auto z-0 opacity-10"
      />

      <div className="w-full relative z-1 py-48  text-center">
        <Badge variant="outline" className="py-1 px-2 bg-white">
          <span className="w-3 h-3 bg-green-500 border-2 rounded-full mr-2 border-green-300" />
          <Link href="/">Check out the team dashboard</Link>
        </Badge>

        <h1 className="max-w-3xl mx-auto font-bold text-5xl py-5">
          Turning your expertise into revenue just got easier
        </h1>
        <p className="max-w-lg mx-auto text-gray-500">
          Create and sell online courses, build vibrant communities, and
          monetize memberships - all on a single, scalable platform.
        </p>
        <div className="mt-5 mx-auto flex items-center justify-center">
          <Button type="button" variant={"outline"} className="mr-3">
            <PlayIcon className="mr-2" />
            Demo
          </Button>
          <Button type="button" variant={"default"}>
            Create account
          </Button>
        </div>
      </div>
    </>
  );
}
