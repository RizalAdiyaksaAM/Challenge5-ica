import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoints";
import http from "../utils/http";

const fetchDataMovieSearch = async (namemovie) => {
  const { data } = await http.get(API_ENDPOINT.NOW_SEARCH, {
    params: {
      include_adult: true,
      language: "en-US",
      page: 1,
      query: namemovie,
    },
  });
  return data;
};

const useMovieDataSearchQuery = (namemovie) => {
  return useQuery(["userDataMovieSearch", namemovie], () => fetchDataMovieSearch(namemovie));
};
export { fetchDataMovieSearch, useMovieDataSearchQuery };
