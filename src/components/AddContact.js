import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


const AddContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !name || !number)
      return toast.warning("Please fill in all fields!");

    if (checkEmail) return toast.error("This email already exists!");

    if (checkNumber) return toast.error("This number already exists!");

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student Added Successfullly !");
    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col className=" shadow mx-auto p-5 ">
          <Card>
            <h1 className="  pt-2 text-center text-success">Add Student</h1>
            <Form>
              <Form.Group className=" p-2 ">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className=" p-2">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className=" p-2">
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Button onClick={handleSubmit} className=" btn text-light btn-block  p-2 m-2">
              Add Student
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AddContact;
