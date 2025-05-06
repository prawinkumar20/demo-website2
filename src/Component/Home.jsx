import AboutUs from "./AboutUs";
import Chefs from "./Chefs";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import Recipe from "./Recipe";

export default function Home () {

    return(
        <>
         <section className="bg-linear-to-t from-gray-100 via-gray-50 to-white lg:flex justify-center items-center lg:h-[85dvh] lg:my-10 mt-36" id="home">
            <div className=" max-w-[85rem] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className=" text-center px-8 flex justify-center items-center">
                        <div>
                            <p className="text-4xl sm:text-2xl md:text-3xl lg:text-7xl font-semibold text-gray-900 mb-6 text-start">Cook anything with the experts</p>
                            <p className="text-lg text-gray-400 mb-8 font-semibold text-start">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            <div className="flex justify-start items-start gap-4">
                                <a href="#" className="inline-block px-5 py-2 md:px-8 md:py-3 lg:px-11 lg:py-5 text-xl font-semibold text-white bg-[#de6752] hover:bg-gray-100 hover:text-[#de6752] border-1 hover:border-[#de6752]  rounded-full transition">Let's Cook</a>
                                <a href="#" className="inline-block px-5 py-2 md:px-8 md:py-3 lg:px-11 lg:py-5 text-xl font-semibold hover:text-white hover:bg-[#de6752] bg-gray-100 text-[#de6752] border-1 border-[#de6752]  rounded-full transition">Explore Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="max-w-[100%] h-auto" src="/images/banner-image.png" alt=""/>
                    </div>
                </div>
            </div>
           
        </section> 

        <AboutUs/>
        <Recipe/>
        <Chefs/>
        <Gallery/>
        <Newsletter/>


        </>
    )
}