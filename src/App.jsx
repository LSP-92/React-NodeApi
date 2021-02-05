import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import FormPage from "./componets/forms/FormPage";
import Four0Four from "./componets/error/Four0Four";
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import NewAdvert from "./componets/newAdvert/NewAdvert";
import AdsList from "./componets/adsList/AdsList";
import Adpage from "./componets/ads/Adpage";
import PrivateRoute from "./componets/shared/privateRoute/PrivateRoute";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute path="/adverts/:id" exact component={Adpage} />
        <Route path="/login" exact component={FormPage} />
        <PrivateRoute path="/new" exact component={NewAdvert} />
        <Route path="/404" exact component={Four0Four} />
        <PrivateRoute path="/" exact component={AdsList} />
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// que me queda por hacer:
// new input type file mira el mime para enviar el enctype="multipart/formdata" >
// adverts/id se debe mostrar un modal

// en login si hace en el checklist hay que guardar el token el local staorage
// revisar el puto useSate
//  Revisar consolelog perdidos
