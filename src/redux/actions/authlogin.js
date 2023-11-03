import { toast } from "react-toastify";
import { reduxLoginUser } from "../../service/auth/login-user";
import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { setToken } from "../reducers/auth/authLogin";

export const LoginUser = (input) =>async (dispatch) =>{
  try{
      const result = await reduxLoginUser(input);
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Anda berhasil login", {
              theme: "dark",
      });
      return true;
  }catch(err) {
    console.log(err, "err")
  }
}

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken)
}