import React from 'react'
import { useMovieDataQuery } from '../service/get-data-movie';
import { Navbar } from '../assets/components/Navbar';
import { Link } from 'react-router-dom';

export const AllMovie = () => {
  
  const { data } = useMovieDataQuery({
    // languange: "en-us",
    // page: "pageNow",
  });
  const LoadData = data ? data.data : [];


  return (
    <div className='bg-black'>
    <Navbar></Navbar>
    <h1 className='text-4xl text-white font-bold pt-[7rem] pl-[10rem]'>Popular Movie</h1>
    <div className='flex flex-wrap justify-center'>
    {LoadData.map((movie) => (
        <div key={movie.id}>
            <div className='flex flex-col w-[15rem] h-[20rem] m-[7rem] text-white'>
              <Link to={`/detail/${movie.id}`}>
              <img className='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
              </Link>
            
            <h1 className='text-xl font-bold '>{movie.title}</h1>
            <p>{movie.release_date}</p>
            </div>
        </div>
    ))}
      </div>
    </div>
    
  )
}
