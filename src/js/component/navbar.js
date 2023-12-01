import React from "react";
import { Link } from "react-router-dom";
import { AddContact } from "../views/addContact";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3 d-flex justify-content-end">
      <Link to="/addContact">
        <button className="btn btn-success me-5">Add new contact</button>
      </Link>
      <Link to="/">
        <button className="btn btn-success me-5">Home</button>
      </Link>
    </nav>
  );
};
