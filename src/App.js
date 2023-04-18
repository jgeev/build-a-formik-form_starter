import React from "react";
import { useFormik } from "formik";
import "./index.css";
function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "Field required";
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      if (!values.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi))
        errors.email = "Username should be an email";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <div>Email</div>
        <input
          type="text"
          name="email"
          id="emailField"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <div id="emailError">
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>Password</div>
        <input
          type="text"
          id="pswField"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <div id="pswError">
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
