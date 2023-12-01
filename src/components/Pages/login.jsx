import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  let initialValues = {
    email: "",
    password: "",
  };


  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required").min("6","Must be at least 6 characters long")
    .matches(/^[a-zA-Z]+$/, "Password can only letters"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (formik.isValid === true) {
      alert("Good");
    }else {
      alert("Check your Input Feilds");
    }
    console.log('formik', formik)
  };

  const formik = useFormik({ initialValues, validationSchema, handleSubmit });




  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <img
              src="src/assets/images/log-in.avif"
              alt="log-in"
              className=""
            />
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="font-roboto font-extrabold text-3xl mb-2">
                  Hello, <br /> <span>Welcome Back</span>
                </p>
                <p className="login-name px-[6rem] py-[2rem] bg-violet-600 text-white font-extrabold rounded-lg">
                  LOGIN
                </p>
              </div>
              <main className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      label="email"
                      className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      {...formik.getFieldProps("email")}
                    />
                  </div>
                  <div>
                    {formik.touched.email && formik.errors.email && (
                      <div className="error-email">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      label="password"
                      className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      {...formik.getFieldProps("password")}
                    />
                    <div>
                      {formik.touched.password && formik.errors.password && (
                        <div className="error-password">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... px-6 font-bold login-btn"
                    type="submit"
                    variant="gradient"
                  >
                    LOGIN
                  </button>
                </form>
              </main>
              <div>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... px-6 font-bold sign-in-btn">
                  SIGN IN WITH GOOGLE
                </button>
                <Link to="/reset">
                  <p className="font-bold reset-password mt-0 my-4 flex flex-col justify-center items-center">
                    Reset the Password
                  </p>
                </Link>
                <p className="flex flex-col justify-center items-center">
                  Don't have an account?
                  <Link to="/register">
                    <p className="font-bold register mx-2">Register</p>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
