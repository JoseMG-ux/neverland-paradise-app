import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
Image

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
const Activities = () => {
  const cardActivity = () => (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500"></p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Activities;
