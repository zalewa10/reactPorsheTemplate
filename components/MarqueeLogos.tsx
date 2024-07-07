import { LOGOS } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Badge } from "./ui/badge";

export default function MarqueeLogos() {
  return (
    <div className="max-w-screen-xl mx-auto pb-20">
      <Badge>Partners</Badge>
      <div className="flex items-center">
        <h2 className="font-bold text-4xl py-5">
          Trusted by thousands of companies in 30+ countries
        </h2>
        <Marquee>
          {LOGOS.map((logo, id) => (
            <Image
              src={logo.url}
              alt={logo.url}
              width={120}
              height={100}
              key={id}
              className="mr-10"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
