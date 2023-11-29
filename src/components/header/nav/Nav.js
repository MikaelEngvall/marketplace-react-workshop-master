import React from "react";
import { Logo } from "./Logo";
import { Login } from "./Login";
import { Sign_Up } from "./Sign_Up";
import { About } from "./About";

export const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <Logo />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <Login />
            <Sign_Up />
            <About />
          </ul>
        </div>
      </div>
    </nav>
  );
};
