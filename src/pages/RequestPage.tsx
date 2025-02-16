import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RequestPage: React.FC = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <Form.Label htmlFor="httpMethod">HTTP method</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Select id="httpMethod" defaultValue="">
              <option value="" disabled>
                Select HTTP method
              </option>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <Form.Label htmlFor="url">URL</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control type="text" id="url" placeholder="Enter URL" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RequestPage;
