import { useState } from "react";
import { useLoginUser } from "../../utils/auth/LoginUser";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export const LoginPage = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate: logUser, isSuccess, error, data } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "Password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "Email") {
        setEmail(e.target.value);
      }
    }
  };

  if (error) {
    console.log(error.response.data.message, "ini eror");
  }

  const loginUser = () => {
    logUser({
      email: Email,
      password: Password,
    });
  };

  useEffect(() => {
    if (data?.data.data.token) {
      toast.success("Anda berhasil login");
      navigate("/home");
    }
  }, [data]);

  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-black to-red-700">
      <div className="flex justify-items-center py-[7rem] px-[5rem] rounded-3xl backdrop-blur-xl bg-black/40 ">
        <div className="bg-white px-[10rem]"></div>
        <div>
          <p className="text-white font-bold text-2xl text-center">Sign in</p>
          <p className=" text-white  ">email</p>
          <input
            onChange={handleInput}
            id="Email"
            className="border w-[20rem] rounded-md mt-1"
            type="email"></input>
          <p className="text-white">password</p>
          <input
            onChange={handleInput}
            id="Password"
            className="border w-[20rem] rounded-md mt-1"
            type="password"></input>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <button
            className="bg-red-600 rounded-lg text-white py-1 mt-4 font-medium "
            onClick={() => loginUser()}>
            {" "}
            Login{" "}
          </button>
          <a href="/Register" className="text-white">
            {" "}
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
