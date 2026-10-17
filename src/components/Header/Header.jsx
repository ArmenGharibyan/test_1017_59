import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  function findAct(props) {
    let status = props.isActive ? "active" : "inactive";
    return status;
  }

  return (
    <header>
      <NavLink className={findAct} to={"/"}>
        Home
      </NavLink>
      <NavLink className={findAct} to={"/images"}>
        Images
      </NavLink>
      <NavLink className={findAct} to={"Videos"}>
        Videos
      </NavLink>
    </header>
  );
}
