import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
    return (
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-300 to-orange-100 ... w-[70%] h-auto mt-[5rem] rounded-3xl shadow-2xl">
          <div className="flex flex-col justify-center items-center py-[4rem]">
            <div className="flex flex-row ">
              <img
                src="src/assets/images/register.jpg"
                alt="log-in"
                className="w-[35rem] h-[25rem] rounded-xl mt-[1.5rem] mr-12 "
              />
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-roboto font-extrabold text-2xl mb-2">
                    Welcome to,
                    <br />{" "}
                    <img
                      src="src/assets/images/sh-logo.png"
                      alt="logo"
                      className="w-[14rem] h-[4.5rem]"
                    />
                  </p>
                  <p className="register-name px-[6rem] py-[2rem] bg-gradient-to-r from-cyan-500 to-blue-500 ... text-white font-extrabold rounded-lg">
                    REGISTER
                  </p>
                </div>
                <main className="flex flex-col justify-center items-center">
                  <form>
                    <div>
                      <input
                        type="name"
                        name="name"
                        label="name"
                        className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        label="email"
                        className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        label="password"
                        className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </div>
                    <button
                      className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-sky-800 hover:to-rose-500 ... px-6 font-bold login-btn"
                      type="submit"
                      variant="gradient"
                    >
                      REGISTER
                    </button>
                  </form>
                </main>
                <div>
                  <p className="flex flex-col justify-center items-center">
                    Already have an account?
                    <Link to="/login">
                      <p className="text-fuchsia-950 font-bold register mx-2">
                        Login
                      </p>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Register;