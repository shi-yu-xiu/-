 import { useRef, useState, useCallback } from 'react'

 export default function BorderGlow({ children, edgeSensitivity = 40, glowColor = "40 80 80", backgroundColor = "transparent", borderRadius = 12, glowRadius = 40, glowIntensity = 1, coneSpread = 25, animated = false, colors }) {
   const ref = useRef(null)
   const [style, setStyle] = useState({})

   const colorsList = colors || ['rgba(' + glowColor + ',0.5)']

   const handleMove = useCallback((e) => {
     const el = ref.current
     if (!el) return
     const rect = el.getBoundingClientRect()
     const x = e.clientX - rect.left
     const y = e.clientY - rect.top
     const w = rect.width, h = rect.height
     
     const dl = x, dr = w - x, dt = y, db = h - y
     const min = Math.min(dl, dr, dt, db)
     
     if (min < edgeSensitivity) {
       const intensity = (1 - min / edgeSensitivity) * glowIntensity * 0.7
       const sh = 'inset 0 0 0 1px rgba(255,255,255,0.04), '
       let edgeGlow = ''
       if (min === dl) edgeGlow = 'inset ' + (10 * intensity) + 'px 0 ' + (30 * intensity) + 'px -' + (5 * intensity) + 'px ' + colorsList[0]
       else if (min === dr) edgeGlow = 'inset -' + (10 * intensity) + 'px 0 ' + (30 * intensity) + 'px -' + (5 * intensity) + 'px ' + colorsList[1 % colorsList.length]
       else if (min === dt) edgeGlow = 'inset 0 ' + (10 * intensity) + 'px ' + (30 * intensity) + 'px -' + (5 * intensity) + 'px ' + colorsList[2 % colorsList.length]
       else edgeGlow = 'inset 0 -' + (10 * intensity) + 'px ' + (30 * intensity) + 'px -' + (5 * intensity) + 'px ' + colorsList[0]
       
       setStyle({ boxShadow: sh + edgeGlow, transition: 'box-shadow 0.08s ease' })
     } else if (style.boxShadow) {
       setStyle({ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)', transition: 'box-shadow 0.3s ease' })
     }
   }, [edgeSensitivity, glowIntensity, style.boxShadow])

   const handleLeave = useCallback(() => {
     setStyle({ boxShadow: 'none', transition: 'box-shadow 0.4s ease' })
   }, [])

   return (
     <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
       style={{ position:'relative', borderRadius: borderRadius + 'px', background: backgroundColor, overflow:'hidden', ...style }}>
       <div style={{ position:'relative', zIndex:1 }}>{children}</div>
     </div>
   )
 }