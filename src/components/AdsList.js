import React from "react";
import Advertisement from "./Advertisement";

export const AdsList = () => {
  const adList = [
    {
      picture: "../Mansion.png",
      title: "House for sale",
      description: "A fine mansion",
      contact: "anders@loren.com",
    },
    {
      picture: "../Car.png",
      title: "Car for sale",
      description: "VolvoXC90",
      contact: "mikael@engvall.com",
    },
    {
      picture: "../Horse.png",
      title: "Horse for sale",
      description: "A great stallion",
      contact: "test@testsson.com",
    },
  ];

  return (
    <>
      <div class="container mt-5">
        <h2 class="mb-4">Advertisement List</h2>
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
