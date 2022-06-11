import { useState, useEffect } from "react"


export const useHasScrolled = (distance = 10) => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY >= distance;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }

  }, [scroll, setScroll])

  return scroll
}
export default useHasScrolled