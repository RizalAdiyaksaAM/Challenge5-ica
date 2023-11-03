import { reduxDetailMovie } from "../../service/get-data-movie-detail"
import { setDetail } from "../reducers/movie/authDetail"


export const actionDetail = ( movieId ) => (dispatch) => {
    reduxDetailMovie( movieId ).then((result)=> {
        dispatch(setDetail(result.data.data))
        console.log(result)
    })
    .catch((err)=>{
        
    })
}
