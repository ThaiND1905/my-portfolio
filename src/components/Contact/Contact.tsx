import React, { useState } from "react";
import { formInitialDetail } from "../Contact";
import { Container, Col, Row } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import ContactImg from "../../assets/images/communicate.png";
import "./Contact.css";
const Contact = () => {
  const initialForm: formInitialDetail = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [initialDetail, setInitialDetail] = useState(initialForm);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ success: false, message: "" });
  const onFormUpdate = (infor: string, value: string) => {
    setInitialDetail({
      ...initialDetail,
      [infor]: value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("Sending...");
    const success = handleInputErrors(initialDetail);
    if (!success) {
      setButtonText("Send");
      return;
    }
    try {
      const response = await fetch("https://my-portfolio-2p7f.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(initialDetail),
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      toast.success("Successful Sending email");
      setStatus({ success: false, message: "" });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImg} alt="Contact Us" />
          </Col>
          <Col md={6} className="align-items-center">
            <h2>Get In Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="Enter First Name"
                    type="text"
                    value={initialDetail.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    type="text"
                    value={initialDetail.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={initialDetail.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control 
                    type="text"
                    value={initialDetail.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} 
                    type="text"
                    value={initialDetail.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}/>
                </Form.Group>
              </Row>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "success" : "danger"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
              <Button variant="primary" type="submit">
                <Send />
                <span>{buttonText}</span>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

function handleInputErrors(initialForm: formInitialDetail) {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const result: boolean = expression.test(initialForm.email);
  if (
    !initialForm.email ||
    !initialForm.firstName ||
    !initialForm.lastName ||
    !initialForm.phone
  ) {
    toast.error("Please fill in all field");
    return false;
  }
  if (!result) {
    toast.error("Fill the valid email form");
    return false;
  }
  return true;
}
