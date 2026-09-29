import React from 'react'
import dress1 from '../assets/dress1.jpeg'
import dress2 from '../assets/dress2.jpeg'
import dress3 from '../assets/dress3.jpeg'
import dress5 from '../assets/dress5.jpg'
const Products = () => {
  const products = [
  { image: dress1, badge: "New", number: "01", category: 'FORMAL WEAR', name: "Ivory Bloom Suit", price: "Rs. 12,900" },
  { image: dress2, badge: "New", number: "02", category: 'FORMAL WEAR', name: "Plum Blossom Suit", price: "Rs. 18,500" },
  { image: dress3, badge: "New", number: "03", category: 'FESTIVE WEAR', name: "Heritage Embroidered Suit", price: "Rs. 14,200" },
  { image: dress5, badge: "New", number: "04", category: 'CASUAL WEAR', name: "Floral Trail Suit", price: "Rs. 9,800" },
]

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((p) => (
        <div key={p.number} className="mainCards group darkSurface flex flex-col">
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <span className="absolute top-4 left-4 bg-[#C1121F] text-white text-xs px-3 py-1 tracking-wide jetBrains">{p.badge}</span>
            <span className="absolute top-4 right-4 text-white font-mono text-lg jetBrains">{p.number}</span>
          </div>

          <div className="darkSurface darkSurfaceText p-4 flex-1 flex flex-col gap-1">
            <p className="text-xs tracking-widest text-[#5B5A61] softText jetBrains">{p.category}</p>
            <p className="fraunces text-xl lightText">{p.name}</p>
            <p className="jetBrains text-sm softText">{p.price}</p>
          </div>

          <div className="flex darkBorder border-t">
            <button className="view flex-1 py-3 text-sm jetBrains darkSurface darkSurfaceText">View</button>
            <button className="addBtn bg-black text-white flex-1 py-3 text-sm jetBrains ">Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products