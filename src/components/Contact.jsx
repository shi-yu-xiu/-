 export default function Contact() {
   return (
     <section className="contact" id="contact">
        <div className="container">
         <div className="contact-grid">
           <div className="reveal">
             <div className="section-label">联系我</div>
             <h2 className="contact-title">用视觉驱动转化<br />期待与你合作</h2>
             <p className="contact-sub">如果您需要电商视觉设计、直播物料支持、或是希望通过 AIGC 提升设计效率，欢迎与我联系。期待用我的专业能力为您的品牌创造真实价值。</p>
             <div className="contact-info-list">
               <div className="contact-info-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 <span>loyalzlax@gmail.com</span>
               </div>
               <div className="contact-info-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 <span>19067817574</span>
               </div>
               <div className="contact-info-item">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 <span>广州</span>
               </div>
             </div>
           </div>
           <form className="contact-form reveal reveal-delay-1" onSubmit={e => { e.preventDefault(); alert('感谢留言！(演示模式)') }}>
             <div className="form-row">
               <label htmlFor="name">姓名</label>
               <input type="text" id="name" className="form-input" placeholder="请输入您的姓名" required />
             </div>
             <div className="form-row">
               <label htmlFor="email2">邮箱</label>
               <input type="email" id="email2" className="form-input" placeholder="请输入您的邮箱" required />
             </div>
             <div className="form-row">
               <label htmlFor="message">留言</label>
               <textarea id="message" className="form-textarea" placeholder="请描述您的合作需求…" required></textarea>
             </div>
             <button type="submit" className="form-submit">
               发送留言
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
             </button>
           </form>
         </div>
       </div>
       <div className="contact-footer">&copy; 2026 钟新诚 · AI视觉设计师</div>
     </section>
   )
 }
