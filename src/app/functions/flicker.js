import { useState, useEffect } from 'react'

export function useFlicker(shadowStyle) {
  const [shadow, setShadow] = useState(shadowStyle)
  const styleProperty = Object.keys(shadowStyle)[0]

  useEffect(() => {
    const interval = setInterval(() => {
      var MAX = 100;
      var rand = Math.floor((Math.random() * MAX) + 1);
      if (rand == 2) {
        setShadow({[styleProperty]: 'none'})
        setTimeout(() => {
          setShadow(shadowStyle)
        }, 50);
      }
    }, 500);

    return () => clearInterval(interval)
  }, [shadowStyle, styleProperty])

  return (shadow)
}
