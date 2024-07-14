import React from "react";
import { Badge } from "./ui/badge";
import { BENEFITS } from "@/constants/index";
import Image from "next/image";

export default function Services() {
  return (
    <div className="text-center bg-gray-100 py-20">
      <Badge>Benefits</Badge>
      <h2 className="max-w-xl mx-auto font-bold text-4xl py-5">
        Overall description of your business or service
      </h2>
      <p className="max-w-md mx-auto text-gray-500">
        Lorem ipsum dolor sit amet consecte adipisi elit. Laborios soluta distin
        aliquam eum asperna quod minima aut.
      </p>

      <div className="flex justify-center gap-5 max-w-screen-lg mx-auto py-10 w-full text-center">
        {BENEFITS.map((item, id) => (
          <div
            className="bg-white p-10 rounded-2xl relative shadow-md text-left"
            key={id}
          >
            <Image
              src={item.logo}
              alt={item.title}
              width={50}
              height={50}
              className="mb-10"
            />
            <h4 className="max-w-xl font-bold text-xl">{item.title}</h4>
            <p className="max-w-xs text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
