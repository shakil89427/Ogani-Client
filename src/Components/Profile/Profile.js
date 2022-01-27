import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../AuthProvider/useAuth";

const MainProfile = () => {
  const { user } = useAuth();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const update = async (e) => {
    e.preventDefault();
    data.email = user.email;
    const response = await axios.post("http://localhost:5000/updateuser", data);
    console.log(response);
  };
  return (
    <div className="p-2">
      <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-2">
        <h3 className="fw-bold">My profile</h3>
        {!edit && (
          <button onClick={() => setEdit(true)} className="edit-profile">
            <i className="fas fa-edit me-1"></i>Edit
          </button>
        )}
        {edit && (
          <button onClick={() => setEdit(false)} className="edit-profile">
            <i class="far fa-window-close me-1"></i>Cancel
          </button>
        )}
      </div>
      {!edit && (
        <div className="my-p-details">
          <p>
            <span>First name</span>
            <br />
            {user.firstname}
          </p>
          <p>
            <span>Last Name</span>
            <br />
            {user.lastname}
          </p>
          <p>
            <span>Email</span>
            <br />
            {user.email}
          </p>
          <p>
            <span>Phone</span>
            <br />
            {user.phone}
          </p>
          <p>
            <span>User Id</span>
            <br />
            {user._id}
          </p>
          <p>
            <span>Address</span>
            <br />
            {user.address}
          </p>
        </div>
      )}
      {edit && (
        <div className="">
          <form onSubmit={update}>
            <Row className="billing-form">
              <Col sm={12} md={12} lg={6}>
                <p>
                  First Name <sup>*</sup>
                </p>
                <input
                  onChange={getData}
                  name="firstname"
                  required
                  defaultValue={user.firstname}
                  type="text"
                />
              </Col>
              <Col sm={12} md={12} lg={6}>
                <p>
                  Last Name <sup>*</sup>
                </p>
                <input
                  onChange={getData}
                  name="lastname"
                  defaultValue={user.lastname}
                  required
                  type="text"
                />
              </Col>

              <Col sm={12} md={12} lg={6}>
                <p>Phone</p>
                <input
                  onChange={getData}
                  name="phone"
                  defaultValue={user.phone}
                  type="number"
                />
              </Col>
              <Col sm={12} md={12} lg={6}>
                <p>
                  Email <sup>*</sup>
                </p>
                <input
                  onChange={getData}
                  name="email"
                  disabled
                  defaultValue={user.email}
                  required
                  type="email"
                />
              </Col>
              <Col sm={12} md={12} lg={12}>
                <p>
                  Address <sup>*</sup>
                </p>
                <input
                  onChange={getData}
                  name="address"
                  defaultValue={user.address}
                  type="text"
                />
              </Col>
            </Row>
            <button className="allbtn" type="submit">
              Update
            </button>
          </form>
          <h3 className="my-3">Change Password</h3>
          <form onSubmit={update}>
            <Row className="billing-form">
              <Col sm={12} md={12} lg={4}>
                <p>
                  Old Password <sup>*</sup>
                </p>
                <input required type="text" />
              </Col>
              <Col sm={12} md={12} lg={4}>
                <p>
                  New Password <sup>*</sup>
                </p>
                <input required type="text" />
              </Col>
              <Col sm={12} md={12} lg={4}>
                <p>
                  Retype New Password <sup>*</sup>
                </p>
                <input required type="text" />
              </Col>
            </Row>
            <button className="allbtn mt-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MainProfile;
