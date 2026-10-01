import React from 'react'

const Footer = () => {
    return (
        <>
            <section>
                <div className="section8 w-full h-auto sm:h-auto md:h-auto lg:h-110 bg-[#F1EDE7] pl-10 pr-10 sm:pl-23 sm:pr-18 pt-20 pb-10 sm:pb-10 md:pb-10 lg:pb-0 superDark">

                    <div className="lg:flex">

                        <div className="lg:flex lg:flex-col lg:w-130 lg:justify-center lg:items-center lg:relative lg:mt-10">
                            <p className="logo fraunces text-2xl font-medium pb-5 md:flex md:justify-center md:items-center lg:w-[15%] lg:relative lg:right-28 lightText">NO<span className="text-[#C1121F] neonRedText"><i>i</i></span>RE</p>
                            <p className="inter text-[#5B5A61] tracking-wider text-md sm:text-sm pt-3 sm:pr-25 md:pr-0 md:w-full lg:w-[65%] softText">An editorial streetwear label cutting small-batch garments from honest cloth. Bahawalpur-founded, worn everywhere.</p>
                        </div>

                        <div className="gap-10 lg:gap-5 pt-10 flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-42 lg:gap-40 lg:w-[65%]">
                            <ul className="flex flex-col gap-3 lightText">
                                <li className="jetBrains text-[#5B5A61] font-semibold footerDark">Shop</li>
                                <a href="./shop.html">
                                    <li className="inter red tracking-wide text-sm">All Products</li>
                                </a>
                                <a href="./collection.html">
                                    <li className="inter red tracking-wide text-sm">Collections</li>
                                </a>
                                <a href="./shop.html">
                                    <li className="inter red tracking-wide text-sm">New Arrivals</li>
                                </a>
                            </ul>

                            <ul className="flex flex-col gap-3 lightText">
                                <li className="jetBrains text-[#5B5A61] font-semibold footerDark">Studio</li>
                                <li className="inter red tracking-wide text-sm"><a href="#section1Id">About</a></li>
                                <li className="inter red tracking-wide text-sm"><a href="#section1Id">Process</a></li>
                                <li className="inter red tracking-wide text-sm"><a href="#section1Id">Careers</a></li>
                            </ul>

                            <ul className="flex flex-col gap-3 lightText">
                                <li className="jetBrains text-[#5B5A61] font-semibold footerDark">Support</li>
                                <a href="#section1Id"><li className="inter red tracking-wide text-sm">Shipping</li></a>
                                <a href="#section1Id"><li className="inter red tracking-wide text-sm">Returns</li></a>
                                <a href="#section1Id"><li className="inter red tracking-wide text-sm">Contact</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] lg:w-[85%] h-0.5 bg-[rgba(19,17,20,0.14)] mt-10 sm:mt-20 lg:relative lg:left-20"></div>

                    <footer className="jetBrains lg:w-full text-[#5B5A61] text-xs mt-10 flex flex-col md:flex-row gap-2 md:gap-40 md:pr-20 md:relative md:right-25 lg:ml-20">
                        <p className="sm:relative sm:left-23 lg:left-25 md:text-nowrap softText">© 2026 NOIRE Studio. All rights reserved.</p>
                        <div className="flex flex-row gap-8 justify-center items-center relative right-2 lg:relative lg:left-87 softText">
                            <a href="#section1Id"><p className="red">Instagram</p></a>
                            <a href="#section1Id"><p className="red">Tiktok</p></a>
                            <a href="#section1Id"><p className="red">Pintrest</p></a>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer
