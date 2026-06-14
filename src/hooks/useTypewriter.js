import { useEffect, useRef, useState } from 'react'

export function useTypewriter(initialWords) {
  const [display, setDisplay] = useState({
    visible: '',
    hidden: initialWords[0] || ''
  })
  const words$ = useRef([...initialWords])
  const letterCount$ = useRef(1)
  const direction$ = useRef(1)
  const waiting$ = useRef(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      if (waiting$.current) return
      const word = words$.current[0]
      const count = letterCount$.current

      if (count === 0) {
        waiting$.current = true
        window.setTimeout(() => {
          words$.current.push(words$.current.shift())
          direction$.current = 1
          letterCount$.current = 1
          waiting$.current = false
        }, 1000)
      } else if (count === word.length + 1) {
        waiting$.current = true
        window.setTimeout(() => {
          direction$.current = -1
          letterCount$.current--
          waiting$.current = false
        }, 1000)
      } else {
        letterCount$.current += direction$.current
        const c = letterCount$.current
        const w = words$.current[0]
        setDisplay({
          visible: w.substring(0, c),
          hidden: w.substring(c, w.length + 1)
        })
      }
    }, 120)

    return () => window.clearInterval(id)
  }, [])

  return display
}
