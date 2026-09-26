import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="w-full h-20 lg:h-21 flex flex-row items-center lg:items-stretch justify-between gap-4 pt-2 lg:pt-5.5 pl-4 pr-4 sticky top-0 border-2 border-[rgba(19,17,20,0.14)] sm:pl-10 sm:pr-10 lg:gap-55 lg:pl-20 lg:justify-start z-200">
                <div class="logo font-serif text-3xl sm:text-3xl sm:font-semibold flex flex-row items-center lg:items-stretch gap-3 lg:gap-5">
                    <p class="lightText">ZA<span class="text-[#C1121F]"><i class="neonRedText">h</i></span>RA</p>
                    
                    {/* <div id="darkActivator" class="w-15 lg:w-14 h-8 lg:h-7 lg:mt-1 rounded-3xl lightTextBorder bg-[url(https://i.pinimg.com/736x/f4/e7/26/f4e7266731c8c7686609174676dcdfb5.jpg)] bg-cover bg-center"></div> */}

                </div>

                <div class="hidden lg:flex inter text-[#131114]">
                    <ul class="lightText hidden lg:flex lg:flex-row lg:gap-8 lg:tracking-wider lg:text-sm lg:pt-2">
                        <li class="underline1 home text-[#C1121F]"><a href="./index.html">HOME</a></li>
                        <li class="underline1"><a href="./collection.html">COLLECTION</a></li>
                        <li class="underline1"><a href="./shop.html">SHOP</a></li>
                    </ul>
                </div>

                <div class="sideNav flex flex-row items-center lg:items-stretch gap-3 sm:gap-6 sm:relative sm:left-8 lg:static">
                    <a href="./login.html">
                        <div class="lightText lightTextBorder cartBtn w-16 sm:w-20 lg:w-23 h-11 lg:h-11 lg:flex lg:flex-row lg:gap-2 justify-center items-center lg:relative lg:bottom-2 hidden shopNow text-sm sm:text-base">
                        <p>Login</p>
                    </div>
                    </a>
                    <a href="./shop.html">
                        <div class="lightText lightTextBorder cartBtn w-16 sm:w-20 lg:w-23 h-11 lg:h-11 flex flex-row lg:gap-2 justify-center items-center lg:relative lg:bottom-2 gap-1 shopNow text-sm sm:text-base">
                        <p>Cart</p>
                        <p>(0)</p>
                    </div>
                    </a>
                    <div id="ham" class="ham flex flex-col gap-1.5 lg:gap-2 lg:relative lg:top-2 lg:hidden">
                        <div class="w-7 sm:w-8 bg-black h-0.5 darkInvert"></div>
                        <div class="w-7 sm:w-8 bg-black h-0.5 darkInvert"></div>
                        <div class="w-7 sm:w-8 bg-black h-0.5 darkInvert"></div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
