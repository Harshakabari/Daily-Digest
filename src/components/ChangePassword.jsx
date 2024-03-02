import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordForm from "./PasswordForm";

function ChangePassword() {

  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const emailRef = useRef();
  const [otpForm, showForm] = useState(true);
  const sendOtp = async (e) => {
    try {
      e.preventDefault();
      const { email } = user;

      const res = await fetch("http://localhost:5000/email-send", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data1 = await res.json();
      if (data1.statusText == 'Success') {
        alert(data1.message);
        showForm(false);
      }

    }
    catch (err) {
      console.log(err);
    }



  }

  return (
      <section className=" flex item-center justify-center">
        <div>
              {otpForm ? <form method="post" id='otpForm'>
                 <div className="w-[400px] h-[200px] shadow-[10px_15px_10px_rgb(0_0_0_/_10%),0_8px_10px_rgb(0_0_0_/_10%)] text-center m-[100px] p-4 rounded-[30px]">
                      <div>
                          <h6 className="mr-[300px]">Email</h6>
                            <input
                              className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2]"
                              type="text"
                              name="email"
                              value={user.email}
                              ref={emailRef}
                              onChange={handleChange}
                              placeholder="Your Email"
                            // onChange={handleChange}
                            ></input>
                       </div>
                      <div className="flex flex-row  gap-[190px] items-center">
                          <p className="text-muted">
                            <button
                              type="button"
                              className="  ml-4 mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "
                              onClick={sendOtp}
                            >
                              Send Otp
                            </button>
                          </p>
                        <div>
                          <p className="text-muted">
                            <button
                              type="button"
                              className="flex item"
                              onClick={() => {
                                Navigate("/");
                              }}
                            >
                              Back
                            </button>{" "}
                          </p>
                        </div>
                      </div>
                      </div>
              </form>
                : <PasswordForm user={user} />
              }
        </div>  
      </section >
  );
}

export default ChangePassword;
