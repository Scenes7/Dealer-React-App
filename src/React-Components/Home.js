import React from 'react'
import Header from './Header'
import ScrollHeader from './ScrollHeader'


import "animate.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {


  return (
    <div>

      <div className="items-center space-y-0">
        <div className="bg-ccasino filter bg-fixed bg-no-repeat bg-center pt-8 pb-16">
          <Header />
          <p className="ml-4 font-sans text-white font-light mx-auto bg-center text-left text-8xl pb-16 pt-24">
            A New Way to Satisfy Your Gambling Addiction.
          </p>

          <p className="font-normal ml-4 font-sans text-pink-600 mx-auto bg-center text-left text-5xl">
            Meet Dealer, Your Virtual Casino.
          </p>
          <div class="pl-6 pt-8">
            <button class="bg-transparent hover:text-pink-600 text-red-600 font-semibold py-2 px-4 border-2 border-red-600 hover:border-pink-600 rounded-full">
              <a href="https://discord.com/api/oauth2/authorize?client_id=866733937115922443&permissions=0&scope=bot" target="_blank" rel="noreferrer"><p class="font-thin text-3xl">Add to Discord</p></a>
            </button>
          </div>
        </div>
        <ScrollHeader />
        <div className="pt-30 text-center p-16 mx-64">
          <p className="font-sans font-light text-4xl ">
            Just Like the Real Thing
          </p>
          <p className="font-sans font-light text-2xl p-4 leading-16">
            Enjoy the authentic casino experience Dealer offers in the comfort of your Discord server. Dealer's commands are simple, intuitive, and come with instructions if you’re ever lost. Tokens (which is the currency for Dealer) are shared across servers so you won’t have to worry about using Dealer between servers. With plenty of games and unique commands, Dealer is perfect for bringing engagement to your server.
          </p>
        </div>
        <div className="flex py-32 bg-gray-100 justify-center overflow-hidden">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
            <div className="px-32">
              <p className="font-sans font-light text-4xl text-center">
                Dynamic Currency
              </p>
              <p className="font-sans font-light text-2xl leading-16 small text text-center ">
                Transfer, delete, bet, and buy with tokens.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce="true">
            <div className="px-48">
              <p className="font-sans font-light text-4xl text-center">
                Understandable
              </p>
              <p className="font-sans font-light text-2xl p-4 leading-16 small text text-center">
                All game instructions are clearly explained
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
            <div className="px-32">
              <p className="font-sans font-light text-4xl text-center">
                Flexible
              </p>
              <p className="font-sans font-light text-2xl  leading-16 small text text-center">
                Enjoy both single player and party games
              </p>
            </div>
          </ScrollAnimation>

        </div>
      </div>
      <div className="bg-gray-300 pt-32 pb-20 space-y-12">
        <p className="font-normal ml-4 font-sans text-pink-600 mx-auto bg-center text-left text-5xl text-center">
          Start Spicing Up Your Discord Server With Dealer.
        </p>
        <div className="text-center">
          <button class="bg-transparent hover:text-white text-red-600 font-semibold hover:text-white py-2 px-4 border-2 border-red-600 hover:bg-pink-600 duration-50 delay-75 rounded-full">
            <a href="https://discord.com/api/oauth2/authorize?client_id=866733937115922443&permissions=0&scope=bot" target="_blank" rel="noreferrer"><p class="font-thin text-4xl">Add to Discord</p></a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
