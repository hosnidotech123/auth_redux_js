import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice'

import {useNavigate,Link} from "react-router-dom"
import axios from 'axios'


function Form() {

    const [username,setUserName]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const dispatch=useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()
        let userCredentials={
            username,
            password
        }

        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload.username!=="admin"){
                setUserName("")
                setPassword("")
                navigate("/login")
            }
            else if(result.payload.username==="admin"){
                setUserName("")
                setPassword("")
                navigate("/dashboard")
            }
        })
        

    }
  return (


    <div>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
            inventore quaerat mollitia?
            </p>

            <form onSubmit={(e)=>handleSubmit(e)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Sign in to your account</p>

            <div>
                <label htmlFor="username" className="sr-only">UserName</label>

                <div className="relative">
                <input
                    required
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Username"
                />

               
                </div>
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                <input
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
                Login
            </button>

            <p className="text-center text-sm text-gray-500">
                No account?
                <Link className="underline" to="/register">Register</Link>
            </p>
            </form>
        </div>
        </div>

    </div>
  )
}

export default Form