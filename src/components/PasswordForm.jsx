import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pass from "../images/pwd.jpg"

const PasswordForm = ({ user }) => {
    const Navigate = useNavigate();
    const [user1, setUser1] = useState({
        code: "",
        password: "",
        cpassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser1({
            ...user1,
            [name]: value,
        });
    };

    const changePasswordFunc = async (e) => {
        e.preventDefault();
        const { code, password, cpassword } = user1;
        try {
            if (code && password && password === cpassword) {
                Object.assign(user1, user);
                console.log(user1);
                console.log(user.email);

                const res = await fetch("http://localhost:5000/change-password", {
                    method: "POST",
                    body: JSON.stringify(user1),
                    headers: { "Content-Type": "application/json" },
                });
                const data1 = await res.json();
                alert(data1.message);

                if (data1.statusText)
                    Navigate("/");

                // setLoginUser(data1.user);
            } else {
                alert("Invlid input");
            }
        } catch (err) {
            alert(err);
        }
        // if (data1.success) {
        //     Navigate("/");
        // }
    };

    return (
        <section className="h-[500px] flex flex-row items-center justify-center gap-6 my-6">
            <div>
                <img
                    src={pass}
                    className="h-[400px] w-[500px]"
                    alt="Sample image"
                    />
            </div>
            <div>
              <form className="w-[400px] h-[350px] shadow-[10px_15px_10px_rgb(0_0_0_/_10%),0_8px_10px_rgb(0_0_0_/_10%)] items-center text-center rounded-[30px]">

                            {/* {console.log("User", user)} */}

                            <div className="form-outline mb-4">
                                <input
                                   className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];"
                                    type="text"
                                    name="code"
                                    maxLength="4"
                                    value={user1.code}
                                    onChange={handleChange}
                                    placeholder="Enter your Otp Code"
                                ></input>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];"
                                    type="password"
                                    name="password"
                                    minLength="8"
                                    value={user1.password}
                                    onChange={handleChange}
                                    placeholder="Enter your Password"
                                ></input>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    className="text-[#1d2129] w-[92%] text-base mx-0 my-2 px-3 py-2 rounded-lg border-2 border-solid border-[#dddfe2];"
                                    type="cpassword"
                                    name="cpassword"
                                    value={user1.cpassword}
                                    onChange={handleChange}
                                    placeholder="Enter your Password"
                                ></input>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    style={{ padding: "0rem 2rem" }}
                                    onClick={changePasswordFunc}
                                    className=" ml-4 mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                    <div  className="m-2">
                                        Change Password
                                    </div>
                                </button>
                                <button
                                    style={{ padding: "0rem 2rem" }}
                                    onClick={() => {
                                        Navigate("/");
                                    }}
                                    className="btn btn-primary btn-lg"
                                >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
        </section>
    );
};

export default PasswordForm;
