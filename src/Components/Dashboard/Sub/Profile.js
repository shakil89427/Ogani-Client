import axios from "axios";
import React, { useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../AuthProvider/useAuth";

const MainProfile = () => {
  const { user, setUser } = useAuth();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [passloading, setPassLoading] = useState(false);

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const update = async (e) => {
    e.preventDefault();
    setLoading(true);
    data.email = user.email;
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/updateuser",
        data
      );
      if (response.data) {
        setUser(response.data);
        setLoading(false);
        setEdit(false);
        toast.success("Information Updated", {
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
        toast.warning("Something Went Wrong", {
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
      }
    } catch (error) {
      setLoading(false);
      toast.warning("Something Went Wrong", {
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
    }
  };

  const changePass = async (e) => {
    e.preventDefault();
    if (e.target[1].value !== e.target[2].value) {
      return toast.warning("New Password didn't Matched", {
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
    }
    if (e.target[1].value.length < 6) {
      return toast.warning("New Password Should be 6 Digits", {
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
    }
    setPassLoading(true);
    const newData = {
      email: user.email,
      oldPassword: e.target[0].value,
      newPassword: e.target[1].value,
      newPassword2: e.target[2].value,
    };
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/updatepass",
        newData
      );
      if (response.data) {
        setPassLoading(false);
        setEdit(false);
        toast.success("Password changed Successfully", {
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
        setPassLoading(false);
        toast.warning("Something Went Wrong", {
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
      }
    } catch (error) {
      setPassLoading(false);
      toast.warning("Something Went Wrong", {
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
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="d-flex align-items-center justify-content-between pb-2 border-bottom mb-2">
        <h3 className="fw-bold">My profile</h3>
        {!edit && (
          <button onClick={() => setEdit(true)} className="edit-profile">
            <i className="fas fa-edit me-1"></i>Edit
          </button>
        )}
        {edit && (
          <button
            disabled={loading}
            onClick={() => setEdit(false)}
            className="edit-profile"
          >
            <i className="far fa-window-close me-1"></i>Cancel
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
            <span>Role</span>
            <br />
            {user.role}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                  name="address"
                  defaultValue={user.address}
                  type="text"
                />
              </Col>
            </Row>
            {loading ? (
              <Spinner className="ms-5" animation="border" variant="success" />
            ) : (
              <button className="allbtn rounded-pill" type="submit">
                Update
              </button>
            )}
          </form>
          <h3 className="my-3">Change Password</h3>
          <form onSubmit={changePass}>
            <Row className="billing-form">
              <Col sm={12} md={12} lg={4}>
                <p>
                  Old Password <sup>*</sup>
                </p>
                <input disabled={passloading} required type="text" />
              </Col>
              <Col sm={12} md={12} lg={4}>
                <p>
                  New Password <sup>*</sup>
                </p>
                <input disabled={passloading} required type="text" />
              </Col>
              <Col sm={12} md={12} lg={4}>
                <p>
                  Retype New Password <sup>*</sup>
                </p>
                <input disabled={passloading} required type="text" />
              </Col>
            </Row>
            {passloading ? (
              <Spinner
                className="ms-5 mt-2"
                animation="border"
                variant="success"
              />
            ) : (
              <button className="allbtn mt-2 rounded-pill" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default MainProfile;
