import React from "react";
import { Nav } from "./nav/Nav";

const Header = () => {
  return (
    <div>
      <Nav />
      <header className="container-fluid bg-danger text-white pt-5 pb-5">
        <div className="container">
          <h2>Marketplace UI!</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
