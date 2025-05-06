
export default function Recipe () {

    return(
        <>
        <section id="receipe">
            <div className=" mx-auto max-w-[85rem]">   
                <div className="grid grid-cols-1 lg:grid-cols-2 m-4 md:m-12 lg:m-12 space-x-5">
                    <div className="flex justify-start"> 
                        <img className="" src="/images/cook.png" alt=""/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-[#de6752]">COOK WITH US</p>
                        <p className="text-3xl  lg:text-6xl  font-semibold text-gray-900 mb-6">Cooking together with the expert.</p>
                        <p className="text-lg text-gray-600 mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                        <p className="text-lg text-gray-600 mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>
                        <div className="flex  gap-4">
                            <a href="#" className="inline-block px-5 py-2 lg:px-11 lg:py-5 text-xl font-semibold text-white bg-[#de6752] border-1 hover:bg-gray-100 hover:text-[#de6752] hover:border-[#de6752]  rounded-full transition">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>        
        </section>



        </>

    )
}