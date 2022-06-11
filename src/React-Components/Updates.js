import React from 'react'
import Header from './Header'
import ScrollHeaderCommands from './ScrollHeaderCommands.js'

const Updates = () => {
    return (
        <div className='font-light'>
            <div className='bg-gray-200'>
                <ScrollHeaderCommands />
                <div className='pt-8 pb-16'>

                    <Header />
                </div>
                <p className='text-4xl pl-12 pb-24'>
                    Here are the Latest Updates:
                </p>
                <div className='bg-gray-100 pb-24 py-12'>
                    <div className='pl-12 pb-12 '>
                        <p className='text-3xl'>
                            Squares Game Added
                        </p>
                        <p className='text-xl'>
                            Added a game called "Squares", as well as a help page explaining how to play the game.
                        </p>
                    </div>
                    <div className='pl-12 py-12 '>
                        <p className='text-3xl'>
                            Help page added
                        </p>
                        <p className='text-xl'>
                            Meant to assist confused users. Displays general information about Dealer and other commands that may be relevant.
                        </p>
                    </div>
                    <div className='pl-12 py-12'>
                        <p className='text-3xl'>
                            Poker help page added
                        </p>
                        <p className='text-xl'>
                            Provides an in depth explanation about how to play No Limit Texas Hold ‘em poker, how to play Dealer’s poker, as well as an external link to a website that explains how to play poker if the above explanation did not suffice.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Updates