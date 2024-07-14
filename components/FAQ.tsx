import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="max-w-screen-lg mx-auto py-20 flex justify-between">
      <div>
        <Badge>FAQ</Badge>
        <div className="">
          <h2 className="font-bold text-4xl py-5">
            Looking for answers? <br /> We&apos;ve got you covered!
          </h2>
          <p className="max-w-xs text-gray-500">
            Here you can find most frequently asked questions with corresponding
            answers.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How much does it cost</AccordionTrigger>
            <AccordionContent>
              Compared to traditional methods like Wordpress it doesnt cost more
              and delivers more performence and customizability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long will it take to make a website?
            </AccordionTrigger>
            <AccordionContent>
              It all depends on the project but usually from two weeks to a
              month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who are you really?</AccordionTrigger>
            <AccordionContent>
              I am web developer based in Poland that loves to create modern
              websites.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Why should i trust you with my own money?
            </AccordionTrigger>
            <AccordionContent>
              Because, when the light shine we shine together...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
