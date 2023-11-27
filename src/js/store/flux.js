const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      GetContact: (name) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${name}`)
          .then((result) => result.json())
          .then((data) => {
            let store = getStore();
            setStore({ ...store, contacts: data });
            console.log("Contacts obtained successfully: ", data);
          })
          .catch((error) => {
            console.log("Error getting contacts: ", error);
          });
      },

      createContact: (data) => {
        console.log("Data to send:", data);

        const actions = getActions();
        const URL = "https://playground.4geeks.com/apis/fake/contact/";
        const opt = {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(data),
        };

        fetch(URL, opt)
          .then((response) => {
            console.log("Respuesta:", response);
            if (response.ok) {
              actions.GetContact();
              alert("Contact created successfully");
            } else {
              alert("ERROR to create a contact");
            }
          })
          .catch((error) => {
            console.log("Error:", error);
            alert("ERROR to create a contact");
          });
      },

      deleteContact: (id) => {
        const actions = getActions();
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            console.log("Respuesta:", response);
            if (response.ok) {
              actions.GetContact(); // Actualizar contactos después de la eliminación.
              alert("Contact deleted successfully");
            } else {
              alert("ERROR to delete contact");
            }
          })
          .catch((error) => {
            console.log("Error:", error);
            alert("ERROR to delete contact");
          });
      },

      updateContact: (id, data) => {
        const actions = getActions();
        const URL = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        const opt = {
          method: "PUT",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(data),
        };
        fetch(URL, opt)
          .then((response) => {
            console.log("Responding:", response);
            if (response.ok) {
              actions.GetContact();
              alert("Contact updated");
            } else {
              alert("Contact update ERROR");
            }
          })
          .catch((error) => {
            console.log("Error:", error);
            alert("Contact update ERROR");
          });
      },

      GetContactById: (id) => {
        return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
          .then((result) => result.json())
		      .then((data) => {
                setStore({ contacts: data });
                console.log("Contacts obtained successfully: ", data);
              })
          .catch((error) => {
            console.log("Error getting contact details: ", error);
            throw error;
          });
      },
    },
  };
};

export default getState;
