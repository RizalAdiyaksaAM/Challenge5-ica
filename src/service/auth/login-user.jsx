import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoints';
import http2 from '../../utils/http2';


const LoginUser = async (input) => {

    return await http2.post(API_ENDPOINT.LOGIN_USER, input );
     
  };
  
  const useLoginUser = () => {
    return useMutation(LoginUser);
  };
  export { LoginUser, useLoginUser };
  
