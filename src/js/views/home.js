import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

import ProfilePic from "../../img/profile.jpg";
import { ContactCard } from "../component/contactCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [agenda, setAgenda] = useState("");

  const contact = store.contacts;

  useEffect(() => {
    actions.loadAgendas();
    //console.log(store.agendas);
  }, [agenda, contact]);

  function selectAgenda(e) {
    setAgenda(e);
    actions.selectAgenda(e);
  }

  function saveChanges() {
    actions.selectAgenda(agenda);
  }

  return (
    <>
      <>
        <Navbar />
        <nav className="navbar bg-body-tertiary d-flex justify-content-center">
          <div className="container d-flex justify-content-between row">
            {/* <!-- Call all Agendas possible --> */}
            <div className="column d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={actions.loadAgendas}
              >
                Agenda Disponibles:{" "}
                {store.agendas.map((index) => (
                  <li className="list-group">{`${index}`}</li>
                ))}
              </button>

              {/* <!-- Agenda selected --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={actions.loadAgendas}
              >
                Agenda seleccionada: {store.agenda}
              </button>

              <span className="mt-3">
                <input
                  className="text-center border rounded-3"
                  value={store.currentUser ? store.currentUser : ""}
                  placeholder="Insert Username."
                  onChange={(event) => actions.setUser(event.target.value)}
                ></input>
              </span>
              <br />
              <div className="d-flex justify-content-center align-content-center">
                <Link to="/contacts">
                  <button className="btn btn-success mt-3 mx-2">
                    GET CONTACTS
                  </button>
                </Link>
                {/* <!-- 
                <Link to="/agendas">
                  <button className="btn btn-success mt-3 mx-2">
                    GET AGENDAS
                  </button>
                </Link>
                 --> */}
              </div>
            </div>

            <div className="column col-6"></div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                    ></h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {store.agendas.map((el, index) => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          onClick={() => selectAgenda(el)}
                          id={`exampleRadios${index}`}
                          value={`option${index}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`exampleRadios${index}`}
                        >
                          {el}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={saveChanges}
                      data-bs-dismiss="modal"
                      className="btn btn-success"
                    >
                      Success
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Show list of contacts --> */}
        {store.agendas.includes(store.currentUser) ? (
          store.contacts.map((item, idx) => {
            return <ContactCard key={idx} info={item} />;
          })
        ) : (
          <h3>
            Nothing to display! Select a valid user to display their contacts.
          </h3>
        )}
      </>
      <></>
    </>
  );
};
