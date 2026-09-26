import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
const Home = () => {
  return (
    <div id="page-index" >

      <Navbar/>

      <section>
        <div id="welcomeSection" className="section2 overflow-hidden relative w-full h-260 sm:h-290 lg:h-210 pt-15 sm:pt-28 md:pt-35 lg:pt-28 pl-5 pr-5 sm:pl-9 sm:pr-9 md:pl-11 md:pr-11 lg:pl-17 lg:pr-11 flex flex-col lg:flex-row gap-6">

            {/* <div className="cursorGlow absolute w-140 h-140 bg-[#C1121F] rounded-full">

            </div> */}
            
            <div data-aos="custom" className="bigHeading flex flex-col gap-8 md:gap-11 lg:gap-6 lg:pt-8">
                <p className="accent sm:text-sm">— SS26 — THE EDIT</p>
            <p className="lightText firstHeading text-6xl lg:text-8xl font-semibold sm:pr-35 md:pr-75 lg:pr-20">Dress like the city <span className="text-[#C1121F]"><i className="neonRedText">argues</i></span> back.</p>
            <p className="text-[#5B5A61] softText text-lg sm:pr-20 md:pr-50">ZAHRA cuts clean silhouettes from honest cloth — engineered for the street, finished like tailoring. No noise, no logos shouting. Just the edit.</p>

            <div className="firstButtons flex flex-col md:flex md:flex-row md:gap-8">
                <a href="./collection.html">
                    <div className="viewCollection w-full sm:w-[100%] md:w-60 h-14 sm:h-15 mt-6 md:mt-4 bg-[#131114] text-[#F1EDE7] flex justify-center items-center text-sm sm:text-md darkInvert darkInvertText"><button>VIEW COLLECTION →</button></div>
                </a>
                <a href="./shop.html">
                    <div className="shopNow w-full sm:w-[100%] md:w-40 h-14 sm:h-15 mt-5 md:mt-4 border border-black text-[#131114] bg-transparent flex justify-center items-center text-sm sm:text-md lightText lightTextBorder"><button>SHOP NOW</button></div>
                </a>
                </div>

                <div className="jetBrains hidden lg:flex lg:flex-row lg:gap-2 text-[#5B5A61] lg:mt-15">
                <div className="bg-[#5B5A61] h-9 w-[0.5px] relative bottom-2 "></div>
                <p className="tracking-widest text-xs">Scroll</p>
            </div>
            </div>

                <div data-aos="custom" className="firstheroImg w-full sm:w-[100%] lg:w-[75%] h-45 sm:h-90 md:h-100 lg:h-140 bg-center bg-cover mt-9">
                    <div className="bg-[#FFFFFF] w-[85%] sm:w-65 h-14 sm:h-12 relative top-25 sm:top-70 md:top-83 lg:top-125 left-5 text-sm sm:text-xs pt-2 sm:pt-3 pl-10 flex sm:flex sm:flex-row sm:gap-2 darkSurface darkSurfaceText">
                        
                    <div className="sm:relative sm:bottom-1 sm:flex">
                            <span className="redDot bg-[#C1121F] w-2.5 h-2.5 rounded-full inline-block relative right-5 top-3">

                            </span>
                        <div className="absolute bottom-2 left-12 sm:static">
                            <p className="sm:text-nowrap">004 — Coated Wool</p>
                            <p>Overshirt</p>
                        </div>
                    </div>
                        
                    </div>
                </div>
            <div>
            </div>

            <div className="jetBrains lg:hidden flex flex-row gap-2 text-[#5B5A61]">
                <div className="bg-[#5B5A61] h-9 w-[0.5px] relative bottom-2 "></div>
                <p className="tracking-widest text-xs">Scroll</p>
            </div>
        </div>
    </section>

    <section>
    <div class="w-full neonRed bg-[#131114] text-[#F1EDE7] jetBrains h-12 sm:h-15 flex flex-row flex-nowrap overflow-hidden justify-start items-center gap-15 text-sm">
            <div class="firstReel w-max flex gap-30 shrink-0">
                
                <div class="text-nowrap flex gap-30 shrink-0">
                    <span class="whitespace-nowrap tracking-wider">FREE RETURNS, 30 DAYS</span>
                    <span class="whitespace-nowrap tracking-wider">SS26 EDIT — LIVE NOW</span>
                    <span class="whitespace-nowrap tracking-wider">SMALL BATCH RUNS</span>
                </div>

                <div class="text-nowrap flex gap-30 shrink-0">
                    <span class="whitespace-nowrap tracking-wider">FREE RETURNS, 30 DAYS</span>
                    <span class="whitespace-nowrap tracking-wider">SS26 EDIT — LIVE NOW</span>
                    <span class="whitespace-nowrap tracking-wider">SMALL BATCH RUNS</span>
                </div>

                <div class="text-nowrap flex gap-30 shrink-0">
                    <span class="whitespace-nowrap tracking-wider">FREE RETURNS, 30 DAYS</span>
                    <span class="whitespace-nowrap tracking-wider">SS26 EDIT — LIVE NOW</span>
                    <span class="whitespace-nowrap tracking-wider">SMALL BATCH RUNS</span>
                </div>

                
            </div>
        </div>
        </section>



        <section>
        <div class="section3 superDark w-full h-100 bg-[#F1EDE7]">

            <div class="softText w-full h-50 flex flex-row flex-wrap">
                <div class="border border-[rgba(19,17,20,0.14)] darkBorder h-50 w-[50%] lg:w-[25%] flex flex-col justify-center items-center gap-3">
                    <p class="fraunces neonRedText text-[#C1121F] text-5xl">07</p>
                    <p class="text-[#5B5A61] jetBrains w-30 sm:w-45 relative left-2 text-sm lightText">CAPSULE DROPS / YEAR</p>
                </div>
                <div class="border border-[rgba(19,17,20,0.14)] darkBorder h-50 w-[50%] lg:w-[25%] flex flex-col justify-center items-center gap-3">
                    <p class="fraunces neonRedText text-[#C1121F] text-5xl">120</p>
                    <p class="text-[#5B5A61] jetBrains w-25 sm:w-35 relative left-3 text-sm lightText">UNITS PER STYLE</p>
                </div>
                <div class="border border-[rgba(19,17,20,0.14)] darkBorder h-50 w-[50%] lg:w-[25%] flex flex-col justify-center items-center gap-3">
                    <p class="fraunces neonRedText text-[#C1121F] text-5xl">04</p>
                    <p class="text-[#5B5A61] jetBrains w-30 sm:w-40 relative left-4 text-sm lightText">RAW MATERIAL MILLS</p>
                </div>
                <div class="border border-[rgba(19,17,20,0.14)] darkBorder h-50 w-[50%] lg:w-[25%] flex flex-col justify-center items-center gap-3">
                    <p class="fraunces neonRedText text-[#C1121F] text-5xl">2019</p>
                    <p class="text-[#5B5A61] jetBrains w-20 relative left-2 text-sm lightText">FOUNDED</p>
                </div>
            </div>

        </div>
    </section>   



    <section>
        <div class="section4 w-full h-685 lg:h-230 sm:h-760 md:h-400 bg-[#F1EDE7] pt-20 lg:pt-0 lg:relative bottom-20 pl-5 pr-5 sm:pl-9 sm:pr-9 md:pl-11 md:pr-11 lg:pl-15 lg:pr-15 superDark">

            <div data-aos-offset="100px" data-aos="custom" class="section4Ani md:flex md:gap-15"><p class="text-[#131114] fraunces text-4xl lg:text-6xl font-semibold sm:pr-65 md:pr-0 lg:pr-30 lightText">This season's signal pieces.</p>
            <p class="inter text-[#5B5A61] pt-10 sm:pr-40 md:pr-0 md:relative md:bottom-6 lg:bottom-0 softText">Four garments that define the SS26 edit — chosen for cut, cloth, and how they hold up after the tenth wear.</p></div>

            <div data-aos-offset="130px" data-aos="custom" id="cardContainer" class="cardContainer  pt-15 ">
                <Products/>
            </div>

            

        </div>
    </section>


        <section>
            
        </section>


    </div>
    
  )
}

export default Home
