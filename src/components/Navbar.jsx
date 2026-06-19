 export default function Navbar() {
   return (
     <nav className="navbar" id="navbar" style={{position:"fixed",top:"0px",left:"0px",right:"0px",zIndex:1000}}>
       <div className="container">
         <a href="#hero" className="navbar-logo">
           <span className="logo-dot"></span>
           钟新诚
         </a>
         <ul className="navbar-links">
           <li><a href="#about">个人经历</a></li>
           <li><a href="#projects">作品展示</a></li>
           <li><a href="#strengths">专业优势</a></li>
           <li><a href="#contact" className="navbar-cta">联系我</a></li>
         </ul>
       </div>
     </nav>
   )
 }
