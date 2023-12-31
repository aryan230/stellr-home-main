import { addDoc, collection, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import MainLoader from "./MainLoader";

function Forms() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [output, setOutput] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collection(db, "home"), data);
    if (docRef) {
      setLoader(false);
      setOutput("success");
      console.log(docRef.id);
    } else {
      setOutput("error");
      setLoader(false);
    }
  };

  const handleChange = (name, value) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loader && <MainLoader />}
      {output ? (
        <div>
          {output === "success" ? (
            <p>
              Hey {data.Name}, Your form has been successfully submitted. Thank
              you for taking the time to provide us with your valuable
              information. We appreciate your input and will review your
              submission promptly. If you have any further questions or require
              assistance, please don't hesitate to reach out to us.
            </p>
          ) : (
            <p>There was some error submitting your form.</p>
          )}
        </div>
      ) : (
        <>
          <h1>Request a Demo!</h1>
          <p>Streamline your research today</p>{" "}
          <div className="form-element">
            <label htmlFor=""> Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => {
                handleChange("Name", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder="Entrer your email address"
              required
              onChange={(e) => {
                handleChange("Email", e.target.value);
              }}
            />
          </div>
          <div className="form-element">
            <label htmlFor="">Number</label>
            <input
              type="number"
              placeholder="Enter your number"
              required
              onChange={(e) => {
                handleChange("Number", e.target.value);
              }}
            />
          </div>
          <div className="form-element">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              required
              onChange={(e) => {
                handleChange("Title", e.target.value);
              }}
            />
          </div>
          <div className="form-element">
            <label htmlFor=""> Industry</label>
            <input
              type="text"
              placeholder="Enter your industry"
              required
              onChange={(e) => {
                handleChange("Industry", e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
}

export default Forms;
