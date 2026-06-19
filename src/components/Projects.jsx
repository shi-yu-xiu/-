 export default function Projects({ onCategoryClick }) {
   const cards = [
     { name: '电商设计', img: 'https://cdn.phototourl.com/free/2026-06-17-8f9f3651-8c0e-433c-901a-194c37f2fa7c.png', cls: 'project-img-1', delay: 'reveal-delay-1' },
     { name: '平面设计', img: 'https://cdn.phototourl.com/free/2026-06-17-bfcac295-a65d-4fc7-9d47-987465ac78bb.jpg', cls: 'project-img-2', delay: 'reveal-delay-2' },
     { name: '品牌设计', img: 'https://cdn.phototourl.com/free/2026-06-17-266767c9-8806-4bb9-9d8b-f7faafcccaca.jpg', cls: 'project-img-3', delay: 'reveal-delay-3' }
   ]
   return (
     <section className="section" id="projects">
       <div className="container">
         <div className="projects-header reveal">
           <div className="section-label">精选案例</div>
           <h2 className="section-title">作品展示</h2>
         </div>
         <div className="projects-grid">
           {cards.map((card) => (
             <div className={"project-card reveal " + card.delay} onClick={() => onCategoryClick(card.name)}>
               <div className={"project-card-image " + card.cls}>
                 <img src={card.img} alt={card.name} style={{width:'100%',height:'100%',objectFit:'cover'}} />
               </div>
               <div className="project-card-info project-card-info-category">
                 <h2 className="project-card-category">&mdash; {card.name}</h2>
                 <div className="project-card-arrow">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </div>
               </div>
             </div>
             
           ))}
         </div>
       </div>
     </section>
   )
 }