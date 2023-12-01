import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Contacts } from "./views/contacts";
import { Agendas } from "./views/agendas";
import { AddContact } from "./views/addContact";
import { EditContact } from "./views/editContact";

import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/agendas" element={<Agendas />} />
            <Route exact path="/addContact" element={<AddContact />} />
            <Route exact path="/editContact" element={<EditContact />} />
            <Route exact path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
