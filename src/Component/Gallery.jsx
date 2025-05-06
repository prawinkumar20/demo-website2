import Newsletter from "./Newsletter";

export default function Gallery () {

    return(
        <>
        <section className="mx-auto max-w-[85rem] md:p-24 py-14 gap-8 " id="gallery">
            <div>
                <p className="text-lg text-center text-[#de6752]">OUR GALLERY</p>
                <h2 className="text-3xl  lg:text-6xl font-semibold text-center mb-6 lg:mb-12">Gallery of our cooked food.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:space-x-2 gap-4 p-4 lg:p-1">
                <div className="col-span-1 space-y-3 ">
                    <div className="relative group overflow-hidden">
                        <img src="/images/foodone.jpg" alt="" className="w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-950/40 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-5 rounded-3xl flex justify-start items-end">
                            <div className="space-y-5 mb-14">
                                <h3 className="text-xl text-white "><span className="font-bold">Name:</span> Caesar Salad(187 Kcal)</h3>
                                <h3 className="text-xl text-white "><span className="font-bold">Price:</span> $35</h3>
                            </div>
                            <div className="mb-14 ">
                                <button className="bg-[#de6752] text-nowrap text-white px-5 py-2 rounded-4xl">
                                    Learn More
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden">
                        <img src="/images/foodthree.jpg" alt="" className="w-full h-full rounded-3xl"/>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-950/40 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-5 rounded-3xl flex justify-start items-end">
                            <div className="space-y-5 mb-14">
                                <h3 className="text-xl text-white "><span className="font-bold">Name:</span> Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)</h3>
                                <h3 className="text-xl text-white "><span className="font-bold">Price:</span> $45</h3>
                            </div>
                            <div className="mb-14 ">
                                <button className="bg-[#de6752] text-nowrap text-white px-5 py-2 rounded-4xl">
                                    Learn More
                                </button> 
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="relative group overflow-hidden">
                        <img src="/images/foodtwo.jpg" alt="" className="w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-950/40 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-5 rounded-3xl flex justify-start items-end">
                            <div className="space-y-5 mb-14">
                                <h3 className="text-xl text-white "><span className="font-bold">Name:</span> Christmas salad(118 Kcal)</h3>
                                <h3 className="text-xl text-white "><span className="font-bold">Price:</span> $17</h3>
                            </div>
                            <div className="mb-14 ">
                                <button className="bg-[#de6752] text-nowrap text-white px-5 py-2 rounded-4xl">
                                    Learn More
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden">
                        <img src="/images/foodfour.jpg" alt="" className="w-full h-full rounded-3xl"/>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-950/40 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-5 rounded-3xl flex justify-start items-end">
                            <div className="space-y-5 mb-14">
                                <h3 className="text-xl text-white "><span className="font-bold">Name:</span> BBQ Chicken Feast Pizza(272 kcal)</h3>
                                <h3 className="text-xl text-white "><span className="font-bold">Price:</span> $27</h3>
                            </div>
                            <div className="mb-14 ">
                                <button className="bg-[#de6752] text-nowrap text-white px-5 py-2 rounded-4xl">
                                    Learn More
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
        </section>

        </>
    )
}