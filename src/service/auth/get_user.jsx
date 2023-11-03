import { useQuery } from "@tanstack/react-query";
import http3 from "../../utils/http3";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const fetchUserData = async ({ queryKey }) => {

  const [_key] = queryKey;
  const { data } = await http3.get(_key).
  then((value) => {
    // apa yang ada di dalam then adalah respon dari api yang berhasil
    // di dalam then kita bisa me manipulasi data yang ingin kita sampikan 
    let Datahasil ={
      Chaa : value.data.data.name , 
      email : value.data.data.email
    }

    return { data : Datahasil }

  }).catch((err) => {
    // akan di jalankan ketika terjadi eror dalam api 
    if (err.response.status === 401) {
      window.location.href = "/";
    }
  })


  return data
}


// untuk Dinamis Handle√
const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData)

};


export { fetchUserData, useGetDataUser }