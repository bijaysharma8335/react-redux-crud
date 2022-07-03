import { ToastContainer } from "react-toastify";
import Navbar from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import Editcontact from "./components/EditContact";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      {/*add/edit/:id/delete */}
      <ToastContainer />

      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <Editcontact />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
