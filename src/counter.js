import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/counter")
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.current);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleIncrement() {
    fetch("http://localhost:4000/api/counter/add", {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.current);
      })
      .catch((err) => console.error(err));
  }

  function handleDecrement() {
    fetch("http://localhost:4000/api/counter/subtract", {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.current);
      })
      .catch((err) => console.error(err));
  }

  function handleReset() {
    fetch("http://localhost:4000/api/counter/reset", {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.current);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="counter-number">{counter}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="counter-button" lg={3}>
          <Button className="ind-button" onClick={handleIncrement}>
            +
          </Button>
        </Col>
        <Col className="counter-button" lg={6}>
          <Button className="ind-button" onClick={handleReset}>
            Reset
          </Button>
        </Col>
        <Col className="counter-button" lg={3}>
          <Button className="ind-button" onClick={handleDecrement}>
            -
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
