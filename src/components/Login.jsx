import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagelogin from "../images/loginimage.jpg"

const Login = ({ setLoginUser }) => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();
    alert(data1.message);
    setLoginUser(data1.user);

    if (data1.success) {
      Navigate("/home");
    }
  };

  return (
    <section className="h-[500px] flex flex-row items-center justify-center gap-6 my-6">
          <div>
            <img
              src={imagelogin}
              className="h-[400px] w-[500px]"
              alt="Sample image"
            />
          </div>
          <div>
            <form className="w-[400px] h-[300px] shadow-[10px_15px_10px_rgb(0_0_0_/_10%),0_8px_10px_rgb(0_0_0_/_10%)] items-center text-center rounded-[30px]"
               onSubmit={login}>
              {/* {console.log("User", user)} */}
              <div>
                <input
                  className="text-[#1d2129] w-[92%] mt-8 text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2]"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                ></input>
              </div>

              {/* // Update password */}
              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                 
             <div className="flex flex-row  items-center justify-between m-4  ">    
              <div>
                <button
                  style={{ padding: "0rem 2rem" }}
                  type="submit"
                   className=" mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "
                >
                 <div className="m-2">
                     Login
                   </div> 
                </button>
                </div>
                <a href="#!" onClick={() => {
                  Navigate("/changePassword");
                }
                } className="text-body">
                  Forgot password?
                </a>
              </div>
            </div>  
                <div className="flex flex-row justify-between items-center mt-4 m-2">
                <p className=" ml-3">
                  Don't have an account? {" "}
                  </p>
                  <button
                    type="submit"
                    style={{ padding: "0rem 2rem" }}
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "
                    onClick={() => {
                      Navigate("/register");
                    }}
                  >
                   <div className="m-2">
                     Register
                   </div>
                  </button>
                </div>
                
              </div>
            </form>
          </div>
    </section>
  );
};

export default Login;
