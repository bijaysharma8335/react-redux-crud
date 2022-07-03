import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Navbar = () => {
  return (
    <Card>
      <nav className="navbar navbar-expand-lg navbar-dark  py-2" style={{background:"#2b537a"}}>
        <Link to="/" className="navbar-brand ml-5">
          <h1 className="align-centre">React Redux Contact App</h1>
        </Link>
      </nav>
    </Card>
  );
};
export default Navbar;
