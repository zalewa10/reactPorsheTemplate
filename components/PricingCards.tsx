import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRICING_CARDS } from "@/constants";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CheckCircledIcon, CheckIcon } from "@radix-ui/react-icons";

export default function PricingCards() {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="text-center">
        <Badge>Pricing</Badge>
        <h2 className="max-w-xl mx-auto font-bold text-4xl py-5">
          We offer options <br /> for your individual needs
        </h2>
        <p className="max-w-md mx-auto text-gray-500 pb-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          quia similique, error unde.
        </p>
      </div>

      <div className="flex items-start justify-between">
        {PRICING_CARDS.map((card, id) => (
          <div key={id}>
            <Card className={`${card.color ? "border border-violet-700" : ""}`}>
              <CardHeader>
                {card.color ? (
                  <Badge className="ml-auto">{card.plan}</Badge>
                ) : (
                  <Badge variant={"outline"} className="ml-auto">
                    {card.plan}
                  </Badge>
                )}

                <CardTitle>
                  <span className="text-4xl py-5 mr-1">{card.price}</span>
                  <span className="text-sm text-gray-500 font-normal">
                    {card.date}
                  </span>
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-500 pb-5"> {card.text}</p>
                </CardDescription>

                <Separator />
              </CardHeader>
              <CardContent>
                <ul>
                  {card.list.map((item, id) => (
                    <li key={id} className="flex gap-2 items-center mb-3">
                      <CheckIcon className="border border-gray-950 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {card.cta ? (
                  <Button variant={"default"} className="w-full">
                    {card.button}
                  </Button>
                ) : (
                  <Button variant={"outline"} className="w-full">
                    {card.button}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
