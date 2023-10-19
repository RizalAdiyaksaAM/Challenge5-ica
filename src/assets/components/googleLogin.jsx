import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ buttonText }) {
  const navigate = useNavigate();
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER2}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    
      const response = await axios.request(config);
      const { token } = response.data.data;

    //   localStorage.setItem("token", token);
      CookieStorage.set(CookieKeys.AuthToken, token);
      // navigate("/");

      // Temporary solution


      toast.success("Berhasil login dengan Google!", {
        theme: "dark",
      } , navigate("/home"));

      // window.location.href = "/home";
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message, {
          theme: "dark",
        });
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button onClick={() => loginWithGoogle()}>
      {buttonText}
    </button>
  );
}

export default GoogleLogin;