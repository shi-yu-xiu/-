 import { useEffect, useState, useCallback } from 'react'
 import BorderGlow from './BorderGlow'
  const worksData = {
   '电商设计': {
     desc: '全链路电商视觉设计，从直播体系到商品详情页的全品类物料输出',
     subcategories: {
       '贝奇乐湿巾主图详情页': {
         desc: '2025年4月',
         works: [
           { id: 101, title: '贝奇乐湿巾主图 01', desc: '', img: '/images/w01.png' },
           { id: 102, title: '贝奇乐湿巾主图 02', desc: '', img: '/images/w02.png' },
           { id: 103, title: '贝奇乐湿巾主图 03', desc: '', img: '/images/w03.png' },
           { id: 104, title: '贝奇乐湿巾主图 04', desc: '', img: '/images/w04.png' },
           { id: 105, title: '贝奇乐湿巾主图 05', desc: '', img: '/images/w05.png' },
           { id: 106, title: '贝奇乐湿巾主图 06', desc: '', img: '/images/w06.png' },
           { id: 107, title: '贝奇乐湿巾主图 07', desc: '', img: '/images/w07.png' },
           { id: 108, title: '贝奇乐湿巾主图 08', desc: '', img: '/images/w08.png' },
           { id: 109, title: '贝奇乐湿巾主图 09', desc: '', img: '/images/w09.png' },
           { id: 110, title: '贝奇乐湿巾主图 10', desc: '', img: '/images/w10.png' },
           { id: 111, title: '贝奇乐湿巾主图 11', desc: '', img: '/images/w11.png' },
           { id: 112, title: '贝奇乐湿巾主图 12', desc: '', img: '/images/w12.png' },
           { id: 113, title: '贝奇乐湿巾主图 13', desc: '', img: '/images/w13.png' },
           { id: 114, title: '贝奇乐湿巾主图 14', desc: '', img: '/images/w14.png' },
           { id: 115, title: '贝奇乐湿巾主图 15', desc: '', img: '/images/w15.png' },
           { id: 116, title: '贝奇乐湿巾主图 16', desc: '', img: '/images/w16.jpg' },
         ]
       },
              '某沙发主图详情页': {
         desc: '沙发产品电商主图设计',
         works: [
           { id: 201, title: '沙发主图 01', desc: '', img: '/images/sofa_01.jpg' },
           { id: 202, title: '沙发主图 02', desc: '', img: '/images/sofa_02.jpg' },
           { id: 203, title: '沙发主图 03', desc: '', img: '/images/sofa_03.jpg' },
           { id: 204, title: '沙发主图 04', desc: '', img: '/images/sofa_04.jpg' },
           { id: 205, title: '沙发详情页 01', desc: '', img: '/images/sofa_05.jpg' },
           { id: 206, title: '沙发详情页 02', desc: '', img: '/images/sofa_06.jpg' },
           { id: 207, title: '沙发详情页 03', desc: '', img: '/images/sofa_07.jpg' },
           { id: 208, title: '沙发详情页 04', desc: '', img: '/images/sofa_08.jpg' },
           { id: 209, title: '沙发详情页 05', desc: '', img: '/images/sofa_09.jpg' },
           { id: 210, title: '沙发详情页 06', desc: '', img: '/images/sofa_10.jpg' }
         ]
       },
       '直播素材': {
         desc: '直播引流封面与短视频视觉物料设计',
         works: [
           { id: 4, title: '直播引流素材', desc: '直播引流短视频封面设计与剪辑调色输出' }
         ]
       }
     }
   },
   '平面设计': {
     desc: '300+套宣传物料设计经验，涵盖传单、海报、LOGO、品牌画册',
     subcategories: {
       '宣传物料': {
         desc: '传单、海报、画册等各类平面设计项目',
         works: [
           { id: 5, title: '宣传物料设计', desc: '传单、活动海报、品牌画册等300余套平面设计项目' },
           { id: 8, title: '印刷品设计', desc: '熟练掌握印刷工艺与材质，确保设计落地效果' }
         ]
       },
       '品牌视觉': {
         desc: '品牌LOGO与活动主视觉创意设计',
         works: [
           { id: 6, title: '品牌LOGO设计', desc: '多品牌LOGO创意方案与视觉推导，符合品牌调性的符号设计' },
           { id: 7, title: '活动主视觉', desc: '品牌活动主视觉与延展物料设计，统一视觉调性' }
         ]
       }
     }
   },
   '品牌设计': {
     desc: '品牌视觉识别系统从0到1的框架搭建能力，涵盖标志/色彩/字体/延展',
     subcategories: {
       '品牌VI': {
         desc: '品牌VI系统与规范手册输出',
         works: [
           { id: 9, title: '品牌VI系统', desc: '品牌标志、色彩体系、字体规范、辅助图形的完整框架设计' },
           { id: 10, title: '品牌规范手册', desc: '从0到1的品牌视觉规范输出与应用指导' }
         ]
       },
       '品牌延展': {
         desc: '品牌触达物料与多场景应用设计',
         works: [
           { id: 11, title: '品牌应用延展', desc: '名片/包装/数字媒体等多场景品牌落地设计' },
           { id: 12, title: '品牌触达物料', desc: '品牌宣传册、产品目录、企业画册等触达物料设计' }
         ]
       }
     }
   }
 }

 function CarouselView({ works, onBack, category }) {
   const [idx, setIdx] = useState(0)
   const work = works[idx]
   const total = works.length

   const prev = useCallback(() => setIdx(i => (i > 0 ? i - 1 : total - 1)), [total])
   const next = useCallback(() => setIdx(i => (i < total - 1 ? i + 1 : 0)), [total])

   useEffect(() => {
     const onKey = (e) => {
       if (e.key === 'ArrowLeft') prev()
       if (e.key === 'ArrowRight') next()
     }
     window.addEventListener('keydown', onKey)
     return () => window.removeEventListener('keydown', onKey)
   }, [prev, next])

   return (
     <>
       <div className="carousel-header">
         <button className="detail-back-btn" onClick={onBack}>
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
           返回{category}
         </button>
         <div className="carousel-meta">
           <span className="carousel-count">{idx + 1} / {total}</span>
         </div>
       </div>

       <div className="carousel-viewport">
         <div className="carousel-image-wrap" key={work.id}>
           {work.img ? (
             <img src={work.img} alt={work.title} className="carousel-image" />
           ) : (
             <div className="carousel-placeholder">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
             </div>
           )}
         </div>
         {total > 1 && (
           <>
             <button className="carousel-arrow carousel-arrow-left" onClick={prev}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
             </button>
             <button className="carousel-arrow carousel-arrow-right" onClick={next}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
             </button>
           </>
         )}
       </div>

       <div className="carousel-info">
         <h2 className="carousel-title">{work.title}</h2>
         <p className="carousel-desc">{work.desc}</p>
       </div>

       {total > 1 && (
         <div className="carousel-dots">
           {works.map((_, i) => (
             <button key={i} className={"carousel-dot" + (i === idx ? ' active' : '')} onClick={() => setIdx(i)} />
           ))}
         </div>
       )}
     </>
   )
 }

 export default function ProjectDetail({ category, onBack }) {
   const [sub, setSub] = useState(null)
   const [workIdx, setWorkIdx] = useState(0)

   useEffect(() => {
     window.scrollTo({ top: 0, behavior: 'instant' })
   }, [])

   useEffect(() => {
     setSub(null)
     setWorkIdx(0)
   }, [category])

   const data = worksData[category]
   if (!data) return null

   const subKeys = Object.keys(data.subcategories)
   const subData = sub ? data.subcategories[sub] : null

   // Carousel view
   if (sub && subData) {
     return (
       <div className="project-detail">
         <CarouselView works={subData.works} onBack={() => { setSub(null); setWorkIdx(0) }} category={category} />
       </div>
     )
   }

   // Subcategory grid view
   const grads = [
     'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
     'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
     'linear-gradient(135deg,#0d0d0d,#1a1a2e,#2d2d44)',
     'linear-gradient(135deg,#302b63,#0f0c29,#24243e)'
   ]
   return (
     <div className="project-detail">
       <div className="sub-header">
         <button className="detail-back-btn" onClick={onBack}>
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
           返回作品展示
         </button>
       </div>
       <div className="container">
         <div className="detail-header">
           <h1 className="detail-title">{category}</h1>
           <p className="detail-desc">{data.desc}</p>
         </div>
         <div className="sub-grid">
           {subKeys.map((key) => {
             const sc = data.subcategories[key]
             const gradIdx = subKeys.indexOf(key) % 4
             return (
               <div className="sub-card" onClick={() => { setSub(key); setWorkIdx(0) }}>
                 <div className="sub-card-image" style={{background: grads[gradIdx]}}>
                   {sc.works[0]?.img ? (
                     <img src={sc.works[0].img} alt={key} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                   ) : (
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                   )}
                 </div>
                 <div className="sub-card-info">
                   <h3 className="sub-card-title">{key}</h3>
                   <p className="sub-card-desc">{sc.desc}</p>
                   <span className="sub-card-count">{sc.works.length} 件作品</span>
                 </div>
               </div>
             
             )
           })}
         </div>
       </div>
     </div>
   )
 }