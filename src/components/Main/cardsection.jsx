import React from "react";
import { cardData } from "/src/assets/cardData.jsx";
import Card from "./card";

const CardSection = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 pt-8 mb-10">
        {cardData.map((card) => {
          return (
            <div key={card.id}>
              <Card
                id={card.id}
                name={card.name}
                img={card.image}
                status={card.status}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;

