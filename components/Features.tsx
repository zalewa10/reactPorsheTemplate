import { FEATURES } from "@/constants";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full bg-inherit mx-auto py-20">
      {FEATURES.map((feature, index) => (
        <>
          <div
            key={index}
            className="flex items-center justify-between max-w-screen-lg mx-auto p-20 xl:px-0 text-left border-b border-b-gray-100 even:flex-row-reverse"
          >
            <div>
              <Badge>{feature.badge}</Badge>
              <h2 className="max-w-sm font-bold text-4xl py-5">
                {feature.title}
              </h2>
              <p className="max-w-xs text-gray-500">{feature.text}</p>
              <Button variant={"outline"} className="mt-5">
                {feature.button} <ChevronRightIcon />
              </Button>
            </div>
            <div className="bg-gray-100 rounded-xl">
              <Image
                src={feature.img}
                alt={feature.title}
                width={350}
                height={350}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
