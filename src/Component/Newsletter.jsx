export default function Newsletter () {

    return(
        <>
        <section className="mx-auto lg:max-w-[85rem]  p-10  lg:p-12 py-0 lg:py-20 ">
            <div className=" bg-[#de6752] p-10  rounded-tr-[500px] rounded-[50px] grid grid-cols-2 ">
                <div className="flex flex-col justify-center ml-0 lg:ml-20 space-y-4">
                    <p className="text-white text-base md:text-xl lg:text-xl">NEWSLETTER</p>
                    <p  className="text-white text-2xl md:text-5xl lg:text-5xl font-semibold ">Subscribe our newsletter.</p>
                    <div className=" space-y-3  bg-white border-white rounded-full w-fit lg:w-full ">
                        <div className="flex justify-between items-center px-3  py-5">
                            <input type="text" className=" outline-none rounded-full placeholder:text-xs lg:placeholder:text-base" placeholder="@ enter your email-address"/>
                            <button type="submit" class="p-2 bg-gray-900 hover:scale-110 duration-300 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler text-white " width="32" height="32" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path>
                                </svg>
                            </button>
                        </div>                        
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <img className="-mt-36 ml-20" width="500" height="602" alt=""  src="./images/soup.svg" />
                </div> 
            </div>
        </section>
        </>
    )
}