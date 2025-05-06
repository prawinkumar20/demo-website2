export default function Footer () {

    return(
        <>
        <footer className="bg-white  mt-10 ">
        <div className="mx-auto max-w-[85rem] px-10 md:px-24 md:space-y-5 lg:px-8">
            <div className="lg:flex md:flex justify-between items-center">
                
                <div>              
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="/images/Logo.svg" alt="Logo" className="w-6 h-6"/>
                            <h2 className="text-3xl font-semibold">Chef's Kitchen.</h2>
                        </div>
                        <p className="text-sm text-gray-600">Open an account in minutes, get full financial control for much longer.</p>
                        <div className="flex space-x-2 mt-4 gap-2  ">
                            <div className="  ">
                                <a href="#">
                                    <div className="flex justify-center items-center h-10    w-10 shadow-lg hover:bg-[#de6752] hover:text-white rounded-full">
                                        <i className="fa-brands fa-facebook-f text-xl"></i>                                    
                                    </div>
                                </a>
                            </div>
                            <div className=" ">
                                <a href="#">
                                    <div className="flex justify-center items-center h-10 w-10 shadow-lg hover:bg-[#de6752] hover:text-white rounded-full">
                                        <i className="fa-brands fa-instagram text-xl"></i>                                    
                                    </div>
                                </a>
                            </div>
                            <div className="">
                                <a href="#">
                                    <div className="flex justify-center items-center h-10 w-10 shadow-lg hover:bg-[#de6752] hover:text-white rounded-full">
                                        <i className="fa-brands fa-x-twitter text-xl"></i>                                    
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 space-x-20 mt-10 lg:mt-0">
          
                    <div className="space-y-5">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Company</h4>
                        <ul className="space-y-3 text-base text-gray-600">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">How we work?</a></li>
                        </ul>
                    </div>
          
                    <div className="space-y-5">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Information</h4>
                        <ul className="space-y-3 text-base text-gray-600">
                            <li><a href="#">Help/FAQ</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Hotel owners</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    <div  className="space-y-5">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">More</h4>
                        <ul className="space-y-3 text-base text-gray-600">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Recipe</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="mt-10 border-t pt-8 pb-8 lg:flex flex-row justify-between items-center text-base text-gray-500">
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy policy</a>
                    <a href="#" className="hover:underline">Terms & conditions</a>
                </div>
                <p className="mt-5 lg:mt-0">©2025 - Chef's Kitchen. Distributed by ThemeWagon and Developed by GetNextjsTemplates</p>
                
            </div>
        </div>
        </footer>
        </>
    )
}