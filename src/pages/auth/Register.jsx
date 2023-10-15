import React, { useState } from 'react'
import { useCreateUser } from '../../service/auth/register-user'


export const Register = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")


    const { mutate : regisUser, isSuccess, error } = useCreateUser()

    const handleInput =(e)=> {
        if (e) {
            if (e.target.id === "Username") {
                setUsername(e.target.value)
            }
            if (e.target.id === "Password") {
                setPassword(e.target.value)
            }
            if (e.target.id === "Email") {
                setEmail(e.target.value)
            }
        }
        
    }

    console.log(Username, "Username")
    console.log(Password, "Password")
    console.log(Email, "Email")
    console.log(isSuccess, "isSucces")
    console.log(error, "Error")

    if (error) {
        console.log(error.response.data.message, "ini eror bangsat"
        )
        
    }

    const registerUser=()=> {
        regisUser({
            "email": Email,
            "name": Username,
            "password": Password
        })
    }

    return (
    
        <div className='w-screen h-screen  flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-red-700 to-black'>
        <div className='flex flex-col justify-items-center p-[7rem] rounded-3xl backdrop-blur-xl bg-black/40 '>
        <p className='text-white font-bold text-2xl text-center'>Register</p>
        <p className=' text-white  ' >Username</p>
        <input onChange={handleInput} id='Username' className='border w-[20rem] rounded-md mt-1' type='text' ></input>
        <p className=' text-white  '>email</p>
        <input onChange={handleInput} id='Email' className='border w-[20rem] rounded-md mt-1' type='email' ></input>
        <p className='text-white'>password</p>
        <input onChange={handleInput} id='Password' className='border w-[20rem] rounded-md mt-1' type='password' ></input>
        <button className='bg-red-600 rounded-lg text-white py-1 mt-4 font-medium' onClick={() =>  registerUser() }> Register </button>


    
        </div>
    </div>
  )
}
