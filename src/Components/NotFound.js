import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
   <div className="h-screen w-full flex flex-col justify-center items-center rounded-3xl bg-gray-800">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-yellow-300 px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5 text-yellow-300 ">
        <span className=" hover:bg-gray-600 rounded-sm  relative block px-8 py-3 bg-[#1A2238] ">
          <Link to="/">Go Home</Link>
        </span>
    </button>
</div>
  )
}

export default NotFound