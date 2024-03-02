import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User({ setLoginUser, setProfile, profile, user }) {
  const update = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    update();
  }, []);

  const Navigate = useNavigate();
  return (
    <section className="h-[500px] flex flex-row items-center justify-center">
            <div  className="w-[400px] h-[350px] shadow-[10px_15px_10px_rgb(0_0_0_/_10%),0_8px_10px_rgb(0_0_0_/_10%)] items-center text-center p-4 rounded-[30px]">
              
                  <div>
                    <h6>Information</h6>
                    <hr className="mt-2 mb-4" />
                    <div className="pt-1">
                      <div className="mb-3">
                        <h6>Name</h6>
                        <p className="text-muted">{user.name}</p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <div className="mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{user.email}</p>
                      </div>
                    </div>
                    <hr className="mt-0 mb-4" />
                    <div>
                    <div className="flex items-center justify-center gap-[100px]">
                      <div className="mb-3">
                        <p className="text-muted">
                          <button
                            type="button"
                            className="  ml-4 mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2       "
                            onClick={() => {
                              setProfile(!profile);
                              Navigate("/");
                            }}
                          >
                            Home
                          </button>
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        {/* <h6>Most Viewed</h6> */}
                        <p className="text-muted">
                          <button
                            type="button"
                            className="float-right "
                            onClick={() => {
                              setLoginUser({});
                              setProfile(!profile);
                              Navigate("/");
                            }}
                          >
                            Log Out
                          </button>
                        </p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
    </section>
  );
}

export default User;
{
  /*
   */
}
