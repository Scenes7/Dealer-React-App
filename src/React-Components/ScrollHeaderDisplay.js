import React from 'react'
import logo from './bot_pfp.jpg'

const ScrollHeaderDisplay = () => {
  return (
    <div className="sticky top-0 pt-2 pb-10 bg-white border-solid border-2">
      <div className="space-x-12 text-pink-600 font-bold text-2xl float-left pl-12 ">
        <p className="hover:text-yellow-300 duration-100 delay-75">
          <a href="/" >
            <img class="rounded-xl h-14 w-full object-cover md:h-full md:w-14" src={logo} alt="" />
          </a>

        </p>
      </div>
      <div className="flex space-x-12 text-pink-600 font-bold text-2xl float-right pr-64">
        <p>
          <a href="Commands" rel="noreferrer" className="hover:text-yellow-300 duration-100 delay-75">COMMANDS</a>
        </p>
        <p>
          <a href="API" rel="noreferrer" className="hover:text-yellow-300 duration-100 delay-75">API</a>
        </p>
        <p>
          <a href="Updates" rel="noreferrer" className="hover:text-yellow-300 duration-100 delay-75">UPDATES</a>
        </p>
      </div>
    </div>
  )
}

export default ScrollHeaderDisplay