import Recipe from "./Recipe";

export default function AboutUs () {

    return(
        <>
        <section className="py-10 px-4 " id="aboutus">
            <div className="max-w-7xl mx-auto ">
                <div className="mb-8">
                    <p className="text-base lg:text-lg text-[#de6752]  text-center mb-4">FEATURES</p>
                    <p className="text-2xl lg:text-6xl font-semibold text-center lg:px-64 mb-12">Get a many of interesting features.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-12 lg:p-10">
                    <div className="bg-linear-to-b from-gray-200 via-gray-50 to-white text-center relative rounded-lg h-60">
                        <div className="relative bottom-20">
                            <img src="/images/featureOne.svg" alt="Feature 1" className="mx-auto  mb-4"/>
                        </div>
                        <div className="absolute top-24 mx-auto w-full">
                            <h3 className="text-2xl font-semibold mb-2 ">Menu Variations</h3>
                            <p className="text-gray-500 font-normal">Sed ut perspiciatis unde omnis iste natus error.</p>
                            <div className="hover:underline text-[#de6752]">
                                <a href="#" >Learn More </a>
                                <i className="fa-solid  fa-angle-right"></i>
                            </div>
                        </div>  
                    </div>
                    <div className="bg-linear-to-b from-gray-200 via-gray-50 to-white text-center relative rounded-lg h-60">
                        <div className="relative bottom-20">
                            <img src="/images/featureTwo.svg" alt="Feature 2" className="mx-auto  mb-4"/>
                        </div>
                        <div className="absolute top-24 mx-auto w-full">
                            <h3 className="text-2xl font-semibold mb-2 ">Cooking Warw</h3>
                            <p className="text-gray-500 font-normal">Sed ut perspiciatis unde omnis iste natus error.</p>
                            <div className="hover:underline text-[#de6752]">
                                <a href="#" >Learn More </a>
                                <i className="fa-solid  fa-angle-right"></i>
                            </div>
                        </div>  
                    </div>
                    <div className="bg-linear-to-b from-gray-200 via-gray-50 to-white text-center relative rounded-lg h-60">
                        <div className="relative bottom-20">
                            <img src="/images/featureThree.svg" alt="Feature 3" className="mx-auto  mb-4"/>
                        </div>
                        <div className="absolute top-24 mx-auto w-full">
                            <h3 className="text-2xl font-semibold mb-2 ">Best Chef</h3>
                            <p className="text-gray-500 font-normal">Sed ut perspiciatis unde omnis iste natus error.</p>
                            <div className="hover:underline text-[#de6752]">
                                <a href="#" >Learn More </a>
                                <i className="fa-solid  fa-angle-right"></i>
                            </div>
                        </div>  
                    </div>
                    <div className="bg-linear-to-b from-gray-200 via-gray-50 to-white text-center relative rounded-lg h-60">
                        <div className="relative bottom-20">
                            <img src="images/featureFour.svg" alt="Feature 4" className="mx-auto  mb-4"/>
                        </div>
                        <div className="absolute top-24 mx-auto w-full">
                            <h3 className="text-2xl font-semibold mb-2 ">Fast Food</h3>
                            <p className="text-gray-500 font-normal">Sed ut perspiciatis unde omnis iste natus error.</p>
                            <div className="hover:underline text-[#de6752]">
                                <a href="#" >Learn More </a>

                                <i className="fa-solid  fa-angle-right"></i>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>




        </>
    )
}