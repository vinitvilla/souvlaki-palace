import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Input} from "@nextui-org/react";
import { LiaShoppingBagSolid } from "react-icons/lia";


export default function MenuItem({title, description, img, category, price}) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="p-2 flex flex-col w-full" justify="start">
        <p className="text-tiny uppercase w-full font-bold">{category}</p>
        <small className="text-default-500 w-full text-ellipsis truncate">{description}</small>
        <h4 className="font-bold text-large w-full text-ellipsis truncate">{title}</h4>
      </CardHeader>
      <CardBody className="flex flex-1 justify-center items-center py-2 rounded-xl overflow-hidden">
        <Image
          alt="Card background"
          className="rounded-xl w-full p-8 h-[150px]"
          src={img}
          width={0}
          height={0}
        />
      </CardBody>
      <CardFooter className="p-4 flex justify-between items-center m-2" justify="end">
        <p className="font-bold">${price}</p>
        <div className="flex gap-2 ">
          <div className="flex gap-2 items-center rounded-xl text-white p-3">
            <p className="text-3xl font-bold text-black" onClick={() => setQuantity(quantity - 1)}>-</p>
            <Input
              bordered
              type="number"
              value={quantity}
              className="w-10 text-center"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <p className="text-3xl font-bold text-black" onClick={() => setQuantity(quantity + 1)}>+</p>
          </div>
        </div>
        <div className="flex gap-2 align-baseline rounded-xl bg-primaryBg text-white p-3 hover:bg-secondary hover:text-secondaryBg cursor-pointer">
          <LiaShoppingBagSolid className='w-4 h-4'/>
          <p className="text-tiny font-bold">Add to Bag</p>
        </div>
      </CardFooter>
    </Card>
  );
}