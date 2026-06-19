 import { useEffect, useRef } from 'react'

 export default function GrainientBackground() {
   const canvasRef = useRef(null)

   useEffect(() => {
     const canvas = canvasRef.current
     if (!canvas) return
     const ctx = canvas.getContext('2d')
     let W, H, animId, start = Date.now()

     const colors = ['#EF4444', '#6366F1', '#EC4899']

     function resize() {
       W = canvas.width = window.innerWidth
       H = canvas.height = window.innerHeight
     }
     resize()
     window.addEventListener('resize', resize)

     function draw() {
       const t = (Date.now() - start) / 1000 * 0.25
       
       // Draw gradient
       const grd = ctx.createRadialGradient(
         W * (0.3 + 0.1 * Math.sin(t * 0.5)), H * (0.2 + 0.1 * Math.cos(t * 0.3)), 0,
         W * (0.6 + 0.1 * Math.sin(t * 0.7 + 2)), H * (0.5 + 0.1 * Math.sin(t * 0.4 + 1)), Math.max(W, H) * 0.8
       )
       grd.addColorStop(0, colors[0] + '33')
       grd.addColorStop(0.4, colors[1] + '22')
       grd.addColorStop(0.7, colors[2] + '1a')
       grd.addColorStop(1, 'transparent')

       ctx.clearRect(0, 0, W, H)
       ctx.fillStyle = grd
       ctx.fillRect(0, 0, W, H)

       // Second gradient for more depth
       const grd2 = ctx.createRadialGradient(
         W * (0.7 + 0.1 * Math.sin(t * 0.6 + 3)), H * (0.8 + 0.1 * Math.cos(t * 0.8 + 2)), 0,
         W * (0.3 + 0.1 * Math.sin(t * 0.3 + 4)), H * (0.6 + 0.1 * Math.sin(t * 0.5 + 5)), Math.max(W, H) * 0.6
       )
       grd2.addColorStop(0, colors[2] + '22')
       grd2.addColorStop(0.5, colors[0] + '1a')
       grd2.addColorStop(1, 'transparent')

       ctx.fillStyle = grd2
       ctx.fillRect(0, 0, W, H)

       // Grain overlay
       const imageData = ctx.getImageData(0, 0, W, H)
       const data = imageData.data
       const grain = 6
       for (let i = 0; i < data.length; i += 4) {
         const noise = (Math.random() - 0.5) * grain
         data[i] += noise
         data[i + 1] += noise
         data[i + 2] += noise
       }
       ctx.putImageData(imageData, 0, 0)

       animId = requestAnimationFrame(draw)
     }
     draw()

     return () => {
       cancelAnimationFrame(animId)
       window.removeEventListener('resize', resize)
     }
   }, [])

   return <canvas ref={canvasRef} style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none',opacity:0.35}} />
 }