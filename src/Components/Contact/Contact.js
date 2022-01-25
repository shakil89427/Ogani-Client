import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = (e) => {
    const newData = { ...data };
    const name = e.target.name;
    const value = e.target.value;
    newData[name] = value;
    setData(newData);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/sendemail",
        data
      );
      if (response.data) {
        setLoading(false);
        e.target.reset();
        toast.success("Message Successfully Sended", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
          transition: Slide,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-center fw-bold contact-h1">Contact Us</h1>
      <Container>
        <Row className="p-5">
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i className="contact-i fas fa-phone-alt"></i>
              </h3>
              <h4 className="fw-bolder">Phone</h4>
              <p className="text-secondary">+01-3-8888-6868</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i className="contact-i fas fa-map-marker-alt"></i>
              </h3>
              <h4 className="fw-bolder">Address</h4>
              <p className="text-secondary">60-49 Road 11378 New York</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i className="contact-i far fa-clock"></i>
              </h3>
              <h4 className="fw-bolder">Open time</h4>
              <p className="text-secondary">10:00 am to 23:00 pm</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i className="contact-i far fa-envelope"></i>
              </h3>
              <h4 className="fw-bolder">Email</h4>
              <p className="text-secondary">shakilahmed89427@gmail.com</p>
            </div>
          </Col>
        </Row>
        <h3 className="fw-bolder text-center">Leave Message</h3>
        <form onSubmit={sendEmail} className="px-5 pb-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <input
                onChange={getData}
                name="name"
                required
                placeholder="Name"
                className="message-input"
                type="text"
              />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <input
                onChange={getData}
                placeholder="Email"
                className="message-input"
                type="email"
                name="email"
                required
              />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <textarea
                onChange={getData}
                name="message"
                required
                placeholder="Write your message"
                className="message-input"
                rows="7"
              />
            </Col>
          </Row>
          {loading ? (
            <Spinner
              className="d-block mx-auto mt-2"
              animation="border"
              variant="success"
            />
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="allbtn d-block mx-auto mt-2"
            >
              SEND MESSAGE
            </button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default Contact;
