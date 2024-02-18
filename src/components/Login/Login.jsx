import React, { useState } from "react";
import LoginFrom from "./LoginFrom";
import CreateUser from "./CreateUser";

const Login = () => {
  const [showLoggin, setshowLoggin] = useState(true);
  const buttonClass = showLoggin
    ? "bg-sky-200 rounded-tl-lg w-full text-center cursor-pointer py-3"
    : " rounded-tl-lg w-full text-center cursor-pointer py-3";

  const buttonClass2 = showLoggin
    ? " rounded-tr-lg w-full text-center cursor-pointer py-3"
    : "bg-sky-200 rounded-tr-lg w-full text-center cursor-pointer py-3";

  return (
    <div className="flex items-center justify-center h-screen loginCoverImg">
      <div className="mx-96  bg-black/20 backdrop-blur-sm rounded-lg">
        <div className="flex justify-between ">
          <div
            onClick={() => {
              setshowLoggin((prevUserInfo) => !prevUserInfo);
            }}
            className={buttonClass}
          >
            Login
          </div>
          <div
            onClick={() => {
              setshowLoggin((prevUserInfo) => !prevUserInfo);
            }}
            className={buttonClass2}
          >
            Create New Account
          </div>
        </div>
        <div className="p-10">
          {showLoggin ? <LoginFrom /> : <CreateUser />}
        </div>
      </div>
    </div>
  );
};
export default Login;
