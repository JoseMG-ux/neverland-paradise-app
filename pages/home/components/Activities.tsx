import { Card, CardBody, CardFooter, CardHeader, Image, Button, Slider } from "@heroui/react";
Image
import type { CardProps } from "@heroui/react";

const list = [
  {
    id: 1,
    title: "Grupales",
    img: "",
  },
  {
    id: 2,
    title: "Estaticas",
    img: "",
  },
  {
    id: 3,
    title: "Roaming",
    img: "",
  },
  {
    id: 4,
    title: "Gankeo",
    img: "",
  },
];

const Activities = (props: CardProps) => {

  return (
    <div className="flex flex-wrap justify-between gap-6 px-8 w-full">
      {list.map((item) =>
        <Card
          key={item.id}
          // isBlurred
           className="flex-1 max-w-[410px] border-1 w-md border-none" 
          shadow="sm"
          {...props}
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={100}
                  shadow="md"
                  src="https://heroui.com/images/album-cover.png"
                  width="100%"
                />
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-large font-medium mt-2">{item.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Activities;
