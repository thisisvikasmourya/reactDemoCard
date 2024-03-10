import React from "react";

function Card() {
  const cardData = [
    {
      id: 100000,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 10,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 100,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 1000,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 10000,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 1,
      name: "this is card 1",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/card.jpg",
      source: "/images/card.jpg",
    },
    {
      id: 2,
      name: "this is card 2",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 3,
      name: "this is card 3",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
    {
      id: 4,
      name: "this is card 4",
      desc: "this is card description2 ",
      email: "this is email1",
      address: "this is address2",
      source: "/images/card.jpg",
    },
  ];

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
