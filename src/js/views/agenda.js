import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import ProfilePic from "../../img/profile.jpg";

export const Agenda = () => {
  const { store, actions } = useContext(Context);
  //console.log(store.contacts);
  const [nameAgenda, setNameAgenda] = useState("");

  useEffect(() => {
    actions.GetContact();
  }, []);
  return (
    <div className="container">
      <h3>Create a Contact and search for it</h3>
      <input
        type="text"
        onChange={(e) => actions.GetContact(e.target.value)}
        placeholder="Anakin"
      ></input>
      <ul className="list-group">
        {store.contacts.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ProfilePic}
                  style={{ height: "200px" }}
                  className="img-fluid rounded-start"
                  alt="Profile Picture"
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">{item.full_name}</h5>
                  <p className="card-text">
                    <i className="m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>
                    </i>{" "}
                    {item.email}
                  </p>
                  <p className="card-text">
                    <i className="m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-map"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                        />
                      </svg>
                    </i>{" "}
                    {item.address}
                  </p>
                  <p className="card-text">
                    <i className="m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-phone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </i>{" "}
                    {item.phone}
                  </p>
                </div>
              </div>
              <div className=" justify-content-md-end col-md-3">
                <button
                  className="btn"
                  type="button"
                  onClick={() => actions.deleteContact(item.id)}
                >
                  <i className="m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </i>
                  Delete Contact
                </button>
                <Link to={`/edit/:id`} className="btn me-md-2">
                  <button className="btn me-md-2" type="button">
                    <i className="fa-solid fa-pen-to-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
					  Edit Contact
                    </i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
