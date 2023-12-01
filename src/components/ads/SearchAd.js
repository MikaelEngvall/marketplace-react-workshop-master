import React, { useState } from "react";
 
const SearchAd = () => {
  const [filterValue, setFilterValue] = useState("");
 
  const filterAds = (currentValue) => {
    // Convert the current filter value to uppercase
    let upperFilterValue = currentValue.toUpperCase();
 
    // Get all the advertisement cards
    let cards = document.getElementsByClassName("card");
 
    // Loop through each "card" and hide/show based on the filter value
    for (let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".card-title").innerText.toUpperCase();
      cards[i].style.display = title.includes(upperFilterValue) ? "" : "none";
    }
  };
 
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setFilterValue(newValue);
    filterAds(newValue);
  };
 
  return (
    <div className="container mt-2">
        <h2 className="container mt-5">Advertisement List</h2>
      <label htmlForm="filterTitle"></label>
      <input
        type="text"
        className="form-control"
        id="filterTitle"
        placeholder="Search title"
        value={filterValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
 
export default SearchAd;
 