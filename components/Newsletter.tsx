import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="max-w-screen-lg mx-auto mb-20 relative">
      <Image
        src="/newsletter.png"
        alt="Banner"
        width={1920}
        height={1080}
        className="h-60 object-cover rounded-3xl"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 p-10 bg-black bg-opacity-50 rounded-3xl">
        <div className="flex flex-col justify-between my-auto">
          <div>
            <h3 className="font-bold text-3xl text-slate-100">
              Join our Newsletter
            </h3>
            <p className="text-slate-200 py-3">
              No Spam, No Ads, Just News tailored for You.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-3 text-slate-100">
            <Input
              type="email"
              placeholder="Email"
              className="placeholder:text-slate-300"
            />
            <Button
              type="submit"
              variant={"outline"}
              className="text-slate-950"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
