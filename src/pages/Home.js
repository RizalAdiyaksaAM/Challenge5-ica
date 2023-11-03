import React, { useEffect } from 'react'
import { Navbar } from '../assets/components/Navbar'
import { SlideMovie } from '../assets/components/SlideMovie'
import { PopularMovie } from '../assets/components/PopularMovie'

export const Home = () => {
  return (
    <div className='bg-black'>
        <Navbar ></Navbar>
        <SlideMovie></SlideMovie>
        <PopularMovie></PopularMovie>
    </div>
  )
}
