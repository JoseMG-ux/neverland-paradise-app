import type { CardProps } from "@heroui/react";

import { Card, CardBody } from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

const Activities = (props: CardProps) => {
  
  return (
    <div className="flex flex-wrap justify-between gap-6 px-8 w-full h-32">
      {siteConfig.navGroupDungeons.map((item) => (
        <Card
          key={item.id}
          // isBlurred
          className="flex-1 max-w-[610px] w-md border-none"
          shadow="md"
          {...props}
        >
          <CardBody>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "flex gap-6 items-center justify-center text-center hover:!bg-transparent h-full",
              )}
              color="foreground"
              href={item.href}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-3xl mt-2 font-bold">{item.label}</h1>
                </div>
              </div>
            </NextLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Activities;
