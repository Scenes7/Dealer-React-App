import React from 'react'
import useHasScrolled from './useHasScrolled.js'
import ScrollHeaderDisplay from './ScrollHeaderDisplay.js'

const ScrollHeaderCommands = () => {
  const scroll = useHasScrolled(150)
  if (scroll) {
    return (
      <ScrollHeaderDisplay />
      )
  } return (
    <div></div>
  )

}

export default ScrollHeaderCommands