import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoints';
import { CookieKeys, CookieStorage } from '../../utils/cookie';
import http3 from '../../utils/http3';

//redux
export const reduxLoginUser = async (input) => {
    return await http3.post(API_ENDPOINT.LOGIN_USER, input );
  };

  //use mutation function
  const LoginUser = async (input) =>{
    return await http3.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        return result
    }).catch((err) => {
  });;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
};

export {LoginUser, useLoginUser }

  
