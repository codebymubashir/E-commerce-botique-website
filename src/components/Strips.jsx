import React from 'react'
import { useDragScroll } from '../hooks/useDragScroll'
import dress6 from '../assets/dress6.jpeg'
import dress7 from '../assets/dress7.jpeg'
import dress8 from '../assets/dress8.jpeg'
import dress9 from '../assets/dress9.jpeg'
import dress10 from '../assets/dress10.jpeg'

const looks = [
  { num: '01', tag: 'L.01', name: 'Ink Tailoring', image: dress6 },
  { num: '02', tag: 'L.02', name: 'Structured Ease', image: dress7 },
  { num: '03', tag: 'L.03', name: 'Sunburst Drape', image: dress8 },
  { num: '04', tag: 'L.04', name: 'Rust & Collar', image: dress9 },
  { num: '05', tag: 'L.05', name: 'Desk to Detail', image: dress10 },
]

const Strips = () => {
  const drag = useDragScroll()

  return (
    <section>
      <div className="section6 w-full h-800 sm:h-312 sm:overflow-x-hidden bg-[#F1EDE7] pt-20 pr-5 pl-5 sm:pr-9 sm:pl-9 superDark">

        <div data-aos-offset="100px" data-aos="custom" className="thirdImgPara lg:flex lg:gap-95 lg:pl-8">
          <p className="text-[#131114] text-4xl lg:text-6xl fraunces font-semibold pb-10 lightText">Runway strip.</p>
          <p className="text-[#5B5A61] inter lg:relative top-5 softText">Drag to explore looks from the SS26 presentation.</p>
        </div>

        <div
          ref={drag.ref}
          onMouseDown={drag.onMouseDown}
          onMouseMove={drag.onMouseMove}
          onMouseUp={drag.onMouseUp}
          onMouseLeave={drag.onMouseLeave}
          data-aos-offset="100px"
          data-aos="custom"
          className="thirdImg pb-10 pt-10 flex flex-row gap-10 sm:gap-5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        >
          {looks.map((look) => (
            <div key={look.num} className="secondCards shrink-0">
              <div
                className="h-90 sm:w-68 bg-cover bg-center flex flex-row gap-45 pt-4 pl-4"
                style={{ backgroundImage: `url(${look.image})` }}
              >
                <div className="jetBrains text-[#C1121F] relative left-55 sm:left-52 text-sm">{look.tag}</div>
              </div>
              <div className="h-25 pt-5 pl-5 flex flex-col gap-2 bg-[#FFFFFF] border-1 border-[rgba(19,17,20,0.14)] darkSurface">
                <p className="jetBrains text-[#5B5A61] text-sm softText">Look {look.num}</p>
                <p className="text-[#131114] fraunces text-xl lightText">{look.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos-offset="100px" data-aos="custom" className="quote pl-3 pr-3 flex flex-col justify-center items-center gap-7 pt-10 sm:pt-23 lg:pr-[25%] lg:pl-[20%]">
          <p className="text-7xl text-[#C1121F] neonRedText">❝</p>
          <p className="fraunces text-2xl lg:text-4xl text-[#131114] font-semibold lg:leading-14 lg:relative lg:left-7 lightText">
            <i>NOIRE understood that restraint is a language. Nothing in this collection needed a logo to be recognized</i>.
          </p>
          <p className="text-[#5B5A61] tracking-wide jetBrains text-sm softText">— Studio Line Magazine</p>
        </div>
      </div>
    </section>
  )
}

export default Strips