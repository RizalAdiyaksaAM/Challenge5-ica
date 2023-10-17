import { useState } from "react"
import { useLoginUser } from "../../utils/auth/LoginUser"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const navigate = useNavigate();

    const { mutate : logUser, isSuccess, error, data } = useLoginUser()

    const handleInput =(e)=> {
        if (e) {
            if (e.target.id === "Password") {
                setPassword(e.target.value)
            }
            if (e.target.id === "Email") {
                setEmail(e.target.value)
            }
        }
    }

    if (error) {
        console.log(error.response.data.message, "ini eror"
        )
    }

    const loginUser=()=> {
        logUser({
            email: Email,
            password: Password
        })
    }

    useEffect(() => {
        if (data?.data.data.token) {
          toast.success("Anda berhasil login");
          navigate("/home");
        }
      }, [data]);

    return (
        <div className='w-screen h-screen  flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-red-700 to-black'>
        <div className='flex flex-col justify-items-center p-[7rem] rounded-3xl backdrop-blur-xl bg-black/40 '>
        <p className='text-white font-bold text-2xl text-center'>Sign in</p>
        <p className=' text-white  '>email</p>
        <input onChange={handleInput} id='Email' className='border w-[20rem] rounded-md mt-1' type='email' ></input>
        <p className='text-white'>password</p>
        <input onChange={handleInput} id='Password' className='border w-[20rem] rounded-md mt-1' type='password' ></input>
        <button className='bg-red-600 rounded-lg text-white py-1 mt-4 font-medium ' onClick={() => loginUser() }> Login </button>
        <a href="/Register" className="text-white"> Register</a>
    </div>
        </div>
    
  )
}

