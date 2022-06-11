import React from 'react'
import useHasScrolled from './useHasScrolled.js'
import ScrollHeaderDisplay from './ScrollHeaderDisplay.js'

const ScrollHeader = () => {
  const scroll = useHasScrolled(600)
  if (scroll) {
    return (
      <ScrollHeaderDisplay />
      )
  } return (
    <div className='pt-2 pb-10 '></div>
  )

}

export default ScrollHeader