import Image from "next/image";
import React from "react";

export default function Baner() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Image
        src="/banner.png"
        alt="Banner"
        width={1920}
        height={1080}
        className="h-96 object-cover rounded-3xl"
      />
    </div>
  );
}
