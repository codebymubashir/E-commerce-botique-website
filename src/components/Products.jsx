import React from 'react'

const Products = () => {
  const products = [
    { image: "https://i.pinimg.com/vwebp/1200x/1b/78/a8/1b78a8ea2a5e33540cf4538c37736839.webp", badge: "New", number: "01", category: 'FOOTWEAR', name: "Field Runner", price: "Rs. 12,900" },
    { image: "https://i.pinimg.com/1200x/f6/39/7c/f6397c23bc6e8356f001491fa26b9ffa.jpg", badge: "New", number: "02", category: 'OUTWEAR', name: "Coated Overshirt", price: "Rs. 18,500" },
    { image: "https://i.pinimg.com/1200x/8c/e1/d6/8ce1d6c3ccbc409f5868cde6f4537043.jpg", badge: "New", number: "03", category: 'FOOTWEAR', name: "Bound Lofer", price: "Rs. 14,200" },
    { image: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=800&auto=format&fit=crop", badge: "New", number: "04", category: 'ACCESSORY', name: "Ledger Watch", price: "Rs. 9,800" },
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