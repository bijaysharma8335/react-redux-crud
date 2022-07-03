import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted Successfully !");
  };
  return (
    <Container>
      <Row>
        <Col md={12} className=" my-5 text-center">
          <Link to="/add" className="btn btn-outline-secondary">
            Add Contact
          </Link>
        </Col>
        <Col  className="mx-auto">
          <Table className=" table-hover "
           style={{border:"1px solid black"}}>
            <thead className="text-white  text-center" style={{background:"#2b537a"}}>
              <tr>
                <th>S.N.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.map((contact, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn  btn-primary "
                      >
                        Edit
                      </Link>
                      <Button
                        className="btn  btn-danger  "
                        style={{ marginLeft: "5px" }}
                        onClick={() => deleteContact(contact.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
