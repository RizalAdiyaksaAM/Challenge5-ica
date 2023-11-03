import { reduxDataMovie } from "../../service/get-data-movie"
import { setMovieData } from "../reducers/movie/authMovie"

export const actionsMovie = () => (dispatch) => {
    reduxDataMovie()
    .then((result)=> {
        dispatch(setMovieData(result?.data))
        // return result

    })
    .catch((err)=>{
        return err
    })
} 