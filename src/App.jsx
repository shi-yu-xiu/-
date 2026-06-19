 import { useEffect, useState } from 'react'
 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
 import About from './components/About'
 import Projects from './components/Projects'
 import Strengths from './components/Strengths'
 import Contact from './components/Contact'
 import ProjectDetail from './components/ProjectDetail'
 
 export default function App() {
   const [cat, setCat] = useState(null)
 
   // Smooth scroll + navbar + reveal observer
   useEffect(() => {
     const handleClick = (e) => {
       const anchor = e.target.closest('a[href^="#"]')
       if (!anchor) return
       e.preventDefault()
       const target = document.querySelector(anchor.getAttribute('href'))
       if (!target) return
       window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
     }
     document.addEventListener('click', handleClick)
 
     const navbar = document.getElementById('navbar')
     const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60)
     window.addEventListener('scroll', onScroll, { passive: true })
 
     return () => {
       document.removeEventListener('click', handleClick)
       window.removeEventListener('scroll', onScroll)
     }
   }, [])
 
   // Reveal observer - re-run when cat changes (main vs detail view)
   useEffect(() => {
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible')
           observer.unobserve(entry.target)
         }
       })
     }, { threshold: 0.1 })
     document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
     return () => observer.disconnect()
   }, [cat])
 
   const hc = (c) => { setCat(c); window.scrollTo({top:0}) }
   const hb = () => { setCat(null); window.scrollTo({top:0}) }
 
   if(cat) return <><div className="page-gradient" /><Navbar /><ProjectDetail category={cat} onBack={hb} /></>
   return <><div className="page-gradient" /><Navbar /><Hero /><About /><Projects onCategoryClick={hc} /><Strengths /><Contact /></>
 }