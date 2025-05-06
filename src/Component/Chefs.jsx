import Gallery from "./Gallery";

export default function Chefs () {

    return(
        <>
        <section className="bg-[#fae8e3] py-20">
            <div className="relative ">
                <div className="absolute w-[420px] right-0 hidden  lg:block"  style={{ top: "-360px" }}>
                    <img src="/images/burger.png" alt="" className=""/>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <p className="text-lg text-center text-[#de6752]">EXPERT CHEFS</p>
                    <h2 className="text-3xl  lg:text-6xl font-semibold text-center mb-12">Let's meet the expert.</h2>
                    <div data-hs-carousel='{"loadingclassNamees": "opacity-0","isAutoPlay": true,"slidesQty": {"xs": 1, "md":2, "lg": 3}}' className="relative">
                        <div className="hs-carousel w-full overflow-hidden md:p-10 ">
                            <div className="relative min-h-72 -mx-1">
                                <div className="hs-carousel-body  top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full p-3">
                                            <span className="transition duration-700">
                                                <img src="/images/boyone.svg" alt="Chef" className=""/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full  p-3">
                                            <span className="transition duration-700">
                                                <img src="/images/girl.png" alt="Chef" className="  "/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full  p-3">
                                            <span className="transition duration-700">
                                                <img src="./images/boytwo.svg" alt="Chef" className=""/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full  p-3">
                                            <span className="transition duration-700">
                                                <img src="/images/girl.png" alt="Chef" className=""/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full  p-3">
                                            <span className="transition duration-700">
                                                <img src="/images/boytwo.svg" alt="Chef" className=""/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hs-carousel-slide px-1">
                                        <div className="flex justify-center h-full  p-3`">
                                            <span className="transition duration-700">
                                                <img src="/images/boyone.svg" alt="Chef" className=""/>
                                                <h3 className="text-2xl font-bold text-center mb-3">Shoo Thar Mien</h3>
                                                <p className="text-gray-600 text-center text-lg">Junior Chef</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </section>


        </>
    )
}