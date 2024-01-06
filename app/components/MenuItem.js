import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function MenuItem({title, description, img, category}) {
  return (
    <Card className="p-2 flex flex-col h-full">
      <CardHeader className="p-2 flex flex-col w-full" justify="start">
        <p className="text-tiny uppercase w-full font-bold">{category}</p>
        <small className="text-default-500 w-full text-ellipsis truncate">{description}</small>
        <h4 className="font-bold text-large w-full text-ellipsis truncate">{title}</h4>
      </CardHeader>
      <CardBody className="flex flex-1 justify-center items-center py-2 rounded-xl overflow-hidden">
        <Image
          alt="Card background"
          className="rounded-xl w-full p-8 object-fit"
          src={img}
          width={0}
          height={0}
        />
      </CardBody>
      <CardFooter className="p-4 flex justify-center items-center m-2" justify="end">
        <div className="flex gap-2 rounded-xl bg-primaryBg text-white p-3">
          <LiaShoppingBagSolid className='w-4 h-4'/>
          <p className="text-tiny font-bold">Add to cart</p>
        </div>
      </CardFooter>
    </Card>
  );
}