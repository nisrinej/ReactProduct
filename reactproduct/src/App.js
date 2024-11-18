
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Name from "./Name";
import Price from "./Price";
import Discription from "./Discription";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            {/* Product Card */}
            <Card style={{ width: "18rem" }}>
              <Image />
              <Card.Body>
                <Card.Title>
                  <Name />
                </Card.Title>
                <Card.Text>
                  <Discription />
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <Price />
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* display user name  */}
            {props.firsName ? (
              <>
                <h2>Hello, {props.firsName}</h2>
                <img src="./usrImg.png" alt="userImg" />
              </>
            ) : (
              <h2>Hello there!</h2>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
