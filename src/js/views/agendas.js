import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

export const Agendas = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid wrapper w-100 px-0">
      <Navbar />

      <div className="container-fluid mx-auto text-center">
        <h2>
          {store.currentUser
            ? `${store.currentUser} agendas`
            : "No user selected."}
        </h2>

        <br />
        <div>
          {store.agendas.includes(store.currentUser) ? (
            store.agendas.map((item, idx) => {
              return <ContactCard key={idx} info={item} />;
            })
          ) : (
            <h3>
              Nothing to display! Select a valid user to display their agendas.
            </h3>
          )}
        </div>

        <Link to="/">
          <button className="btn btn-primary mt-3">Back home</button>
        </Link>
      </div>
    </div>
  );
};
