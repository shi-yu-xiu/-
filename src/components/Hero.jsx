 import { useEffect, useRef } from 'react'

 export default function Hero() {
   const canvasRef = useRef(null)

   useEffect(() => {
     const canvas = canvasRef.current
     if (!canvas) return
     const ctx = canvas.getContext('2d')
     let particles = []
     let mouseX = 0, mouseY = 0, W, H
     function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
     resize(); window.addEventListener('resize', resize)
     document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY })
     class P {
       constructor() { this.reset() }
       reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.size = Math.random() * 2 + 0.5; this.sx = (Math.random() - 0.5) * 0.3; this.sy = (Math.random() - 0.5) * 0.3; this.o = Math.random() * 0.5 + 0.1 }
       update() { this.x += this.sx; this.y += this.sy; const dx = mouseX - this.x, dy = mouseY - this.y, d = Math.sqrt(dx*dx + dy*dy); if (d < 200) { this.x -= dx * 0.001; this.y -= dy * 0.001 } if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset() }
       draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(99,102,241,' + this.o + ')'; ctx.fill() }
     }
     for (let i = 0; i < Math.min(80, Math.floor(W * H / 20000)); i++) particles.push(new P())
     function connect() { for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx*dx + dy*dy); if (d < 150) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = 'rgba(99,102,241,' + (0.04 * (1 - d / 150)) + ')'; ctx.lineWidth = 0.5; ctx.stroke() } } }
     let animId; function animate() { ctx.clearRect(0, 0, W, H); for (const p of particles) { p.update(); p.draw() } connect(); animId = requestAnimationFrame(animate) }
     animate()
     return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
   }, [])

   return (
     <section className="hero" id="hero">
       <canvas ref={canvasRef} className="hero-canvas"></canvas>
       <div className="hero-overlay"></div>
       <div className="container">
         <div className="hero-badge">
           <span className="hero-badge-dot"></span>
           在线接稿 · 全国可合作
         </div>
         <h1 className="hero-title">
           钟新诚<br />
           <span className="gradient-text">AI视觉设计师作品集</span>
         </h1>
         <p className="hero-sub">
           AI视觉设计师 / 电商视觉设计<br />
           用设计驱动转化，以AI提升效率，为品牌创造真实商业价值
         </p>
         <div className="hero-actions">
           <a href="#projects" className="btn-primary">
             查看作品
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
           </a>
           <a href="#contact" className="btn-secondary">联系我</a>
         </div>
       </div>
       <div className="hero-scroll">
         <span>向下探索</span>
         <div className="hero-scroll-line"></div>
       </div>
     </section>
   )
 }