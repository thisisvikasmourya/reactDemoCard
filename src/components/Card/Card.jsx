import React from "react";
import Button from "../button/Button";
import cardData from "../../data/cardData";


function Card() {
  return (
    <>
      <div className=" py-10 px-10">
        <div className="grid grid-cols-4 gap-5 ">
          {cardData?.map((card) => (
            <div key={card.id}>
              <div className="bg-teal-500 text-gray-200 rounded-lg p-4 text-lg py-4 my-5 drop-shadow-2xl">
                <img
                  src={card.source}
                  alt="this is image of cpu"
                  className="rounded-lg"
                />
                <div>{card.name}</div>
                <div>{card.desc}</div>
                <div className="text-sm">{card.email}</div>
                <div className="text-sm">{card.address}</div>
                <div className="flex gap-2 py-1">
                  <Button title={"Contact us"} />
                  <Button title={"Add to Cart"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
