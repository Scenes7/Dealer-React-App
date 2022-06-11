import React from 'react'
import Header from './Header.js'

const API = () => {
    return (
        <div className="bg-gray-100 font-sans text-black font-light mx-auto text-center  pb-60 pt-8 ">
            <Header />
            <div className="my-24">
                <div className="text-center">
                    <p className="text-5xl">
                        Simple, yet thorough API.
                    </p>
                    <p className="text-3xl pt-4">
                        API is currently in development, be on the lookout for an update!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default API
