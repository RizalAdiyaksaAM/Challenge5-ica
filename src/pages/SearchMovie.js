import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchDataMovieSearch } from '../service/get-data-movie-search';
import { Navbar } from '../assets/components/Navbar';

export const SearchMovie = () => {
    const { namemovie } = useParams();
    const [movie, setDataMovie] = useState([]);

    const movieSearch = async () => {
        const data = await fetchDataMovieSearch(namemovie);
        setDataMovie(data.results);
        console.log(data.results, "data")
    };

    useEffect(()=> {
        movieSearch();
    }, [namemovie]);

    return (
    <div className='bg-black'>
        <Navbar></Navbar>
        <div className='flex flex-wrap justify-center'>
        {movie.map((search) => (
            <div key={search.id}>
                <div className='flex flex-col w-[15rem] h-[20rem] m-[7rem] text-white'>
                <Link to={`/detail/${search.id}`}>
                <img className='' src={`https://image.tmdb.org/t/p/original/${search.poster_path}`}></img>
                </Link>
                <h1 className='text-xl font-bold '>{search.title}</h1>
                <p>{search.release_date}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    
  )
}
