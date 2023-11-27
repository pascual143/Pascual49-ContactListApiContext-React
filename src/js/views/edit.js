import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edit = () => {
    const { store, actions } = useContext(Context);
    const { name } = useParams();

    const [data, setData] = useState({
        full_name: "", email: "", phone: "", address: "", agenda_slug: " "
    });

    useEffect(() => {
        // Obtén los detalles del contacto por ID cuando el componente se monta
        actions.GetContact(name)
             .then(data => {
                 setData(data);
             })
             .catch(error => {
                 console.error("Error obteniendo detalles del contacto:", error);
             });
    }, [actions, name]);

    const editContact = async (event) => {
        event.preventDefault();
        actions.updateContact(name, data);
    };

    const info = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="text-center mt-5">
            <ul className="list-group">
                <li className="list-group-item">
                    <h1 className="title">Edit Contact</h1>
                    <div>
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" onChange={info} name="full_name" required value={data.full_name} />
                    </div>
                    <div>
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter email" onChange={info} name="email" required value={data.email} />
                    </div>
                    <div>
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone" onChange={info} name="phone" required value={data.phone} />
                    </div>
                    <div>
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" onChange={info} name="address" required value={data.address} />
                    </div>
                    <div>
                        <label className="form-label">agenda_slug</label>
                        <input type="text" className="form-control" placeholder="Agenda Slug" onChange={info} name="agenda_slug" required value={data.agenda_slug} />
                    </div>
                    <br />
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={editContact}>
                            Update
                        </button>
                    </div>
                    <br />
                    <Link to="/">
                        <span>Come Back Contacts</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Edit;