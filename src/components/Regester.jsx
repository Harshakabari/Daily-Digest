import React, { useState } from "react";
import "./Login";
import register from "../images/register.jpg"

import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  // let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data1 = await res.json();
      // console.log(data);
      alert(data1.message);
      if (data1.success) Navigate("/");
      // history.push("/login");
    } else {
      alert("Invlid input");
    }
  };
  return (
    <section className="h-[450px] flex flex-row items-center justify-center gap-6 my-6">
         <div>
            <img
              src={register}
              className="h-[400px] w-[500px]"
              alt="Sample image"
            />
          </div>
          <div>
            <form className="w-[400px] h-[450px] shadow-[10px_15px_10px_rgb(0_0_0_/_10%),0_8px_10px_rgb(0_0_0_/_10%)] items-center text-center rounded-[30px]"
               onSubmit={Register}>
              {console.log("User", user)}
              <div className="form-outline mb-4">
                <input
                  className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];
                  outline: none;"
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                   className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];
                  outline: none;"
                  type="text"
                  name="email"
                  value={user.email}
                  placeholder="Your Email"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];
                  outline: none;"
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Your Password"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];
                  outline: none;"
                  type="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  placeholder="Re-enter Password"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <button
                  style={{ padding: "0rem 2rem" }}
                  type="submit"
                  className="text-white flex ml-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "
                >
                 <div className="m-2">
                      Register
                 </div>              
                </button>
              </div>  
            
                  <div className="flex items-center justify-center gap-[80px]">
                    <div>
                      <p>Already register </p>
                    </div>
                    <div>
                    <div>
                      <button
                        style={{ padding: "0rem 2rem" }}
                        className="  ml-4 mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "

                        onClick={() => {
                          Navigate("/");
                        }}
                      >
                      <div className="m-2">
                          Sign in
                      </div>   
                      </button>
                      </div>  
                    </div>
                  </div> 
            </form>
          </div>
    </section>
  );
};

export default Register;
