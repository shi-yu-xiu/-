 import { useEffect, useState, useCallback } from 'react'
 import BorderGlow from './BorderGlow'
  const worksData = {
  '电商设计': {
    desc: '电商全链路视觉设计，涵盖主图、详情页、产品视觉全品类',
    subcategories: {
      '贝奇乐湿巾主图详情页': {
         desc: '2025年4月',
        works: [{ id: 361, title: '湿巾主图 01', desc: '', img: '/images/w01.png' },
{ id: 362, title: '湿巾主图 02', desc: '', img: '/images/w02.png' },
{ id: 363, title: '湿巾主图 03', desc: '', img: '/images/w03.png' },
{ id: 364, title: '湿巾主图 04', desc: '', img: '/images/w04.png' },
{ id: 365, title: '湿巾主图 05', desc: '', img: '/images/w05.png' },
{ id: 366, title: '湿巾主图 06', desc: '', img: '/images/w06.png' },
{ id: 367, title: '湿巾主图 07', desc: '', img: '/images/w07.png' },
{ id: 368, title: '湿巾主图 08', desc: '', img: '/images/w08.png' },
{ id: 369, title: '湿巾主图 09', desc: '', img: '/images/w09.png' },
{ id: 370, title: '湿巾主图 10', desc: '', img: '/images/w10.png' },
{ id: 371, title: '湿巾主图 11', desc: '', img: '/images/w11.png' },
{ id: 372, title: '湿巾主图 12', desc: '', img: '/images/w12.png' },
{ id: 373, title: '湿巾主图 13', desc: '', img: '/images/w13.png' },
{ id: 374, title: '湿巾主图 14', desc: '', img: '/images/w14.png' },
{ id: 375, title: '湿巾主图 15', desc: '', img: '/images/w15.png' },
{ id: 376, title: '湿巾主图 16', desc: '', img: '/images/w16.jpg' }
        ]
      },
'眷恋香水主图详情页': {
         desc: '2026年5月',
        works: [{ id: 321, title: '眷恋香水主图 01', desc: '', img: '/images/perf_j_01.jpg' },
{ id: 322, title: '眷恋香水主图 02', desc: '', img: '/images/perf_j_02.jpg' },
{ id: 323, title: '眷恋香水主图 03', desc: '', img: '/images/perf_j_03.jpg' },
{ id: 324, title: '眷恋香水主图 04', desc: '', img: '/images/perf_j_04.jpg' },
{ id: 325, title: '眷恋香水主图 05', desc: '', img: '/images/perf_j_05.jpg' },
{ id: 326, title: '眷恋香水主图 06', desc: '', img: '/images/perf_j_06.jpg' },
{ id: 327, title: '眷恋香水主图 07', desc: '', img: '/images/perf_j_07.jpg' },
{ id: 328, title: '眷恋香水主图 08', desc: '', img: '/images/perf_j_08.jpg' },
{ id: 329, title: '眷恋香水主图 09', desc: '', img: '/images/perf_j_09.jpg' },
{ id: 330, title: '眷恋香水主图 10', desc: '', img: '/images/perf_j_10.jpg' },
{ id: 331, title: '眷恋香水主图 11', desc: '', img: '/images/perf_j_11.jpg' },
{ id: 332, title: '眷恋香水主图 12', desc: '', img: '/images/perf_j_12.jpg' },
{ id: 333, title: '眷恋香水主图 13', desc: '', img: '/images/perf_j_13.jpg' },
{ id: 334, title: '眷恋香水主图 14', desc: '', img: '/images/perf_j_14.jpg' },
{ id: 335, title: '眷恋香水主图 15', desc: '', img: '/images/perf_j_15.jpg' },
{ id: 336, title: '眷恋香水主图 16', desc: '', img: '/images/perf_j_16.jpg' }
        ]
      },
'耳语香水主图': {
         desc: '2026年5月',
        works: [{ id: 341, title: '耳语香水主图 01', desc: '', img: '/images/perf_e_01.jpg' },
{ id: 342, title: '耳语香水主图 02', desc: '', img: '/images/perf_e_02.jpg' },
{ id: 343, title: '耳语香水主图 03', desc: '', img: '/images/perf_e_03.jpg' },
{ id: 344, title: '耳语香水主图 04', desc: '', img: '/images/perf_e_04.jpg' },
{ id: 345, title: '耳语香水主图 05', desc: '', img: '/images/perf_e_05.jpg' },
{ id: 346, title: '耳语香水主图 06', desc: '', img: '/images/perf_e_06.jpg' },
{ id: 347, title: '耳语香水主图 07', desc: '', img: '/images/perf_e_07.jpg' }
        ]
      },
'垃圾桶主图': {
         desc: '',
        works: [{ id: 31, title: '垃圾桶主图 01', desc: '', img: '/images/trash_01.jpg' },
{ id: 32, title: '垃圾桶主图 02', desc: '', img: '/images/trash_02.jpg' },
{ id: 33, title: '垃圾桶主图 03', desc: '', img: '/images/trash_03.jpg' },
{ id: 34, title: '垃圾桶主图 04', desc: '', img: '/images/trash_04.jpg' },
{ id: 35, title: '垃圾桶主图 05', desc: '', img: '/images/trash_05.jpg' }
        ]
      },
'沙发主图详情页': {
         desc: '',
        works: [{ id: 3011, title: '沙发主图 01', desc: '', img: '/images/sofa_01.jpg' },
{ id: 3012, title: '沙发主图 02', desc: '', img: '/images/sofa_02.jpg' },
{ id: 3013, title: '沙发主图 03', desc: '', img: '/images/sofa_03.jpg' },
{ id: 3014, title: '沙发主图 04', desc: '', img: '/images/sofa_04.jpg' },
{ id: 3015, title: '沙发主图 05', desc: '', img: '/images/sofa_05.jpg' },
{ id: 3016, title: '沙发主图 06', desc: '', img: '/images/sofa_06.jpg' },
{ id: 3017, title: '沙发主图 07', desc: '', img: '/images/sofa_07.jpg' },
{ id: 3018, title: '沙发主图 08', desc: '', img: '/images/sofa_08.jpg' },
{ id: 3019, title: '沙发主图 09', desc: '', img: '/images/sofa_09.jpg' },
{ id: 3020, title: '沙发主图 10', desc: '', img: '/images/sofa_10.jpg' }
        ]
      },
          }
  },
  '平面设计': {
    desc: '平面设计',
    subcategories: {
      '海报': {
        desc: '2024年',
        works: [{ id: 501, title: '海报设计 01', desc: '', img: '/images/poster_01.jpg' },
{ id: 502, title: '海报设计 02', desc: '', img: '/images/poster_02.jpg' },
{ id: 503, title: '海报设计 03', desc: '', img: '/images/poster_03.jpg' }]
      }
    }
  },
  '品牌设计': {
    desc: '品牌视觉识别系统设计',
    subcategories: {
      '品牌VI': {
        desc: '',
        works: [
          { id: 601, title: '品牌VI设计', desc: '品牌标志' }
        ]
      },
      '品牌延展': {
        desc: '',
        works: [
          { id: 602, title: '品牌延展设计', desc: '品牌延展物料' }
        ]
      }
    }
  }

}



function CarouselView({ works, onBack, category }) {
  const [idx, setIdx] = useState(0)
  if (!works || works.length === 0) return null
  const work = works[idx]
  const total = works.length
  const prev = useCallback(() => setIdx(i => (i > 0 ? i - 1 : total - 1)), [total])
  const next = useCallback(() => setIdx(i => (i < total - 1 ? i + 1 : 0)), [total])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])
  return <>
    <div className="carousel-header">
      <button className="detail-back-btn" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        返回{category}
      </button>
      <div className="carousel-meta"><span className="carousel-count">{idx + 1} / {total}</span></div>
    </div>
    <div className="carousel-viewport">
      <div className="carousel-image-wrap" key={work.id}>
        {work.img ? <img src={work.img} alt={work.title} className="carousel-image" /> : <div className="carousel-placeholder"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>}
      </div>
      {total > 1 && <><button className="carousel-arrow carousel-arrow-left" onClick={prev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button><button className="carousel-arrow carousel-arrow-right" onClick={next}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button></>}
    </div>
    <div className="carousel-info"><h2 className="carousel-title">{work.title}</h2><p className="carousel-desc">{work.desc}</p></div>
    {total > 1 && <div className="carousel-dots">{works.map(function(_, i) { return <button key={i} className={"carousel-dot" + (i === idx ? " active" : "")} onClick={function() { setIdx(i) }} />; })}</div>}
  </>
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