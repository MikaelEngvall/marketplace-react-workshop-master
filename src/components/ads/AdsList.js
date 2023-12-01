import React from "react";
import Advertisement from "./Advertisement";

export const AdsList = () => {
  const adList = [
    {
      picture: "../Mansion.png",
      title: "House",
      description: "A fine mansion",
      contact: "anders@loren.com",
    },
    {
      picture: "../Car.png",
      title: "Car",
      description: "VolvoXC90",
      contact: "mikael@engvall.com",
    },
    {
      picture: "../Horse.png",
      title: "Horse",
      description: "A great stallion",
      contact: "test@testsson.com",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div id="advertisements" class="row">
          {adList.map((ad) => (
            <Advertisement
              key={ad.id}
              picture={ad.picture}
              title={ad.title}
              contact={ad.contact}
              description={ad.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
