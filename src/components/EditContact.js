import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Editcontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);

      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id != parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id != parseInt(id) && contact.number === parseInt(number)
    );

    if (!email || !name || !number)
      return toast.warning("Please fill in all fields!");

    if (checkEmail) return toast.error("This email already exists!");

    if (checkNumber) return toast.error("This number already exists!");

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student Updated Successfullly !");
    history.push("/");
  };

  return (
    <Container>
      {currentContact ? (
        <>
          <Row>
            <Col className=" shadow mx-auto p-5">
              <Card>
                <h1 className="pt-2 text-center text-success">
                  Edit Student {id}
                </h1>
                <Form>
                  <Form.Group className=" p-2 ">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className=" p-2 ">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className=" p-2 ">
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </Form.Group>
                  <div style={{display:"flex" ,justifyContent:'center',marginBottom:'15px'}}>
                  <Col style={{flex:0}}>
                  <Button
                    onClick={() => handleSubmit()}
                    placeholder="Update Student"
                    className="btn mr-2 mt-2"
                  >
                    Update{" "}
                  </Button>
                  </Col>
                  <Col style={{flex:0}}>
                  <Link to="/" className="btn btn-danger ml-3 mt-2 ms-2">
                    Cancel
                  </Link>
                  </Col>
                  </div>
                 
                 
                  
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student Contact with Id {id} not exist
        </h1>
      )}
    </Container>
  );
};
export default Editcontact;
