 export default function About() {
   return (
     <section className="section" id="about">
       <div className="about-bg"></div>
       <div className="container">
         <div className="about-grid">
           <div className="about-profile reveal">
             <div className="about-avatar">
               <div className="about-avatar-inner">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
               </div>
             </div>
             <h2 className="about-name">钟新诚</h2>
             <p className="about-role">AI视觉设计师 / 电商视觉设计</p>
             <div className="about-contact-list">
               <a href="mailto:loyalzlax@gmail.com" className="about-contact-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 loyalzlax@gmail.com
               </a>
               <a href="tel:19067817574" className="about-contact-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 19067817574
               </a>
               <span className="about-contact-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 广州
               </span>
             </div>
           </div>
           <div className="about-content">
             <div className="section-label reveal">关于我</div>
             <h2 className="section-title reveal reveal-delay-1">用设计驱动转化<br />用数据验证价值</h2>
             <div className="about-desc reveal reveal-delay-2">
               <p>你好，我是 <strong>钟新诚</strong>，一名兼具品牌审美与商业转化思维的电商视觉设计师。</p><br />
               <p>拥有 3 年电商全链路视觉设计经验与直播中控操盘能力，累计完成千余件商品视觉物料。精通 PS/AI/PR 等设计工具，并熟练运用 AIGC 技术实现创意出图与物料量产，搭建多场景标准化视觉模板库，物料制作效率提升 70%，主图平均点击率提升 30%。</p><br />
               <p>兼任直播中控期间，独立完成 50+ 场直播零失误操盘，实现「视觉设计 — 实时调整 — 数据复盘 — 迭代优化」的全链路闭环，兼具品牌审美与商业转化思维，为店铺业绩增长提供双向赋能。</p>
             </div>
             <div className="about-stats reveal reveal-delay-3">
               <div className="about-stat"><div className="about-stat-num">3<span className="plus">+</span></div><div className="about-stat-label">年设计经验</div></div>
               <div className="about-stat"><div className="about-stat-num">1000<span className="plus">+</span></div><div className="about-stat-label">商品视觉物料</div></div>
               <div className="about-stat"><div className="about-stat-num">50<span className="plus">+</span></div><div className="about-stat-label">直播场次操盘</div></div>
               <div className="about-stat"><div className="about-stat-num">70<span className="plus">%</span></div><div className="about-stat-label">物料提效</div></div>
             </div>
           </div>
         </div>
       </div>
     </section>
   )
 }
