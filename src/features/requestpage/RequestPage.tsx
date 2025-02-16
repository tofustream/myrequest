import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import JsonField from "./jsonField";

const RequestPage: React.FC = () => {
  const [jsonFields, setJsonFields] = useState<JsonField[]>([]);

  const addJsonField = () => {
    setJsonFields([...jsonFields, { id: Date.now(), key: "", value: "" }]);
  };

  const removeJsonField = (id: number) => {
    setJsonFields(jsonFields.filter((field) => field.id !== id));
  };

  return (
    <Container className="mt-3">
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

        <Form.Group as={Row} className="mt-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <div className="d-grid gap-2">
              <Button variant="secondary" onClick={addJsonField}>
                Add JSON Field
              </Button>
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
          </Col>
        </Form.Group>

        {/* JSON Fields (Scrollable) */}
        {jsonFields.length > 0 && (
          <div
            className="mt-3"
            style={{
              maxHeight: "400px", // 任意の高さに調整
              overflowY: "auto",
              border: "1px solid #ddd", // 視覚的な枠
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {jsonFields.map((field) => (
              <Card key={field.id} className="mb-2">
                <Card.Body>
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={2}>
                      <Form.Label htmlFor={`jsonKey-${field.id}`}>
                        JSON Key
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        id={`jsonKey-${field.id}`}
                        placeholder="Enter JSON Key"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Col sm={2}>
                      <Form.Label htmlFor={`jsonValue-${field.id}`}>
                        JSON Value
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        id={`jsonValue-${field.id}`}
                        placeholder="Enter JSON Value"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-danger"
                          onClick={() => removeJsonField(field.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Form.Group>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </Form>
    </Container>
  );
};

export default RequestPage;
