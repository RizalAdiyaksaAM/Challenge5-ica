// import React from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Button } from "react-bootstrap";
// import { useGoogleLogin } from "@react-oauth/google";

// function googleLogin({ buttonText }) {
//   const registerLoginWithGoogleAction = async (accessToken) => {
//     try {
//       let data = JSON.stringify({
//         access_token: accessToken,
//       });

//       let config = {
//         method: "post",
//         maxBodyLength: Infinity,
//         url: `${import.meta.env.REACT_APP_SERVER2}/v1/auth/google`,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: data,
//       };

//       const response = await axios.request(config);
//       const { token } = response.data.data;

//       localStorage.setItem("token", token);

//       // navigate("/");

//       // Temporary solution
//       window.location.href = "/";
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response.data.message);
//         return;
//       }
//       toast.error(error.message);
//     }
//   };

//   const loginWithGoogle = useGoogleLogin({
//     onSuccess: (responseGoogle) =>
//       registerLoginWithGoogleAction(responseGoogle.access_token),
//   });

//   return (
//     <Button variant="primary" onClick={() => loginWithGoogle()}>
//       {buttonText}
//     </Button>
//   );
// }

// export default googleLogin;