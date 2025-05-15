import React from 'react'
import UnderContruction from '../components/UnderContruction'

const Login = () => {
    return (
        <>
            <header className='bg-yellow h-2'>
            </header>
            <div className='text-center'>
                <button onClick={() => window.location.href = '/'}>
                    <h1 className='text-6xl text-center font-bold font-Heading m-10 uppercase'>jb hi-fi</h1>
                </button>
            </div>

            <div className='w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg m-10 flex flex-row'>
                <h2 className='text-2xl font-bold font-Title p-2'>Log In</h2>

                <UnderContruction />
            </div>
        </>
    )
}

export default Login
