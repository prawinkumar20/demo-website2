import axios from "axios";
import { useEffect, useState } from "react"

export default function Header () {

    const [formData, setFormData] = useState({});


    useEffect(() => {
        const handleScroll = () => {
          const header = document.getElementById("myHeader");
          if (window.scrollY > 0) {
            header.classList.add("shadow-xl");
          } else {
            header.classList.remove("shadow-xl");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const handlechange = (e) =>setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

      const handleRegister = async(e) =>{
        e.preventDefault();
       
        console.log(formData);
      }


    //   const handleLogin = async(e) =>{
    //     e.preventDefault();
    //     const response = await axios.post('http://192.168.29.13:5000/api/login',formData);
    //     console.log(response);
    //   }




    return(
        <>
         <header id="myHeader" className="fixed z-10 top-0  w-full bg-white text-sm py-6">
            <nav className=" lg:max-w-[85rem]  mx-auto  lg:flex sm:flex flex-wrap items-center justify-between p-4">
                <div className="flex items-center justify-between ">
                    <div>
                        <a className="sm:order-1 flex justify-center items-center font-semibold focus:outline-hidden focus:opacity-80  lg:pr-0" href="#">
                            <img src="/images/Logo.svg" alt=""/>
                            <p className="mx-3 text-2xl font-semibold">Chef's Kitchen.</p>
                        </a>
                    </div>
                    <div className="sm:order-3 flex items-center gap-x-2">
                        <button type="button" className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
                            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            <span className="sr-only">Toggle</span>
                        </button> 
                    </div>
                </div>
                <div id="hs-navbar-alignment" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 space-x-5 ">
                        <a href="#home" className="text-gray-400 text-xl font-semibold hover:text-[#de6752] sm:hidden md:hidden lg:block">Home</a>
                        <a href="#aboutus" className="text-gray-400 text-xl font-semibold hover:text-[#de6752] sm:hidden md:hidden lg:block">About Us</a>
                        <a href="#receipe" className="text-gray-400 text-xl font-semibold hover:text-[#de6752] sm:hidden md:hidden lg:block">Recipe</a>
                        <a href="#gallery" className="text-gray-400 text-xl font-semibold hover:text-[#de6752] sm:hidden md:hidden lg:block">Gallery</a>
                        <div className="flex gap-2 ">
                            <i className="fa-solid fa-phone text-xl text-[#de6752]"></i>
                            <a href="#" className=" text-xl font-semibold hover:text-[#de6752] ">+1(909) 235-9814</a>
                        </div>
                        <div className="flex gap-2">
                            <button type="button" className="py-4 px-8 items-center sm:hidden md:hidden lg:block  text-xl font-semibold  rounded-full   bg-[#fae8e3] text-[#de6752]  hover:bg-[#de6752]  hover:text-white " aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-vertically-centered-modal" data-hs-overlay="#hs-vertically-centered-modal">Sign In</button>
                                <div id="hs-vertically-centered-modal" className="hs-overlay hidden fixed inset-0  flex items-center justify-center bg-black/50 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-vertically-centered-modal-label">
                                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
                                        <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs p-10 rounded-xl pointer-events-auto">
                                            <div className="border-gray-200 mx-[90%]">
                                                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent  text-gray-800  focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-vertically-centered-modal">
                                                    <span className="sr-only">Close</span>
                                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M18 6 6 18"></path>
                                                        <path d="m6 6 12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex justify-center items-center py-3 mb-10">
                                                <img src="/images/Logo.svg" alt=""/>
                                                <h3 id="hs-vertically-centered-modal-label" className="font-semibold text-2xl text-gray-800">Chef's Kitchen.</h3>
                                            </div>
                                            <div className="flex justify-center items-center gap-4 mb-10 ">
                                                <button className="flex items-center justify-center gap-2 bg-[#de6752] hover:bg-[#de6752] text-white py-4 px-10 rounded-md text-base font-normal">
                                                    Sign In
                                                    <img src="/images/search.png" alt="Google" className="w-5 h-5"/>
                                                </button>
                                                <button className="flex items-center justify-center gap-2 bg-[#de6752] hover:bg-[#de6752] text-white py-4 px-10 rounded-md text-base font-normal">
                                                    Sign In
                                                    <a href="" className="w-5 h-5"><i className="fa-brands fa-github"></i></a>
                                                </button>
                                            </div>
                                            <div className="text-center mb-10 ">OR</div>
                                            <form >
                                                <div className="max-w-sm space-y-6">
                                                    <div className="max-w-sm space-y-5 ">
                                                        <input type="text" name="Email" id="Email" onChange={handlechange} className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-[#de6752] disabled:opacity-50 disabled:pointer-events-none" placeholder="Email"/>
                                                    </div>
                                                    <div className="max-w-sm space-y-5">
                                                        <input type="text" name="Password" id="Password" onChange={handlechange} className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-[#de6752] disabled:opacity-50 disabled:pointer-events-none " placeholder="Password"/>
                                                    </div>
                                                    <button type="submit" className="w-full bg-[#de6752] hover:bg-[#de6752] text-base font-medium py-3 rounded-md ">Sign In</button>
                                                </div>
                                            </form>
                                            <div className="mt-4  text-center text-sm ">
                                                <a href="#" className="hover:text-[#de6752]"><p className="mb-3">Forgot Password?</p></a>
                                                <a href="#" ><p>Not a member yet? <span className="text-[#de6752] hover:underline">Sign Up</span></p></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>	  
                            <button type="button" className="py-4 px-8  items-center sm:hidden text-xl font-semibold md:hidden lg:block rounded-full   hover:bg-[#fae8e3] hover:text-[#de6752]  bg-[#de6752]  text-white " aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-vertically-centered-modal1" data-hs-overlay="#hs-vertically-centered-modal1">Sign Up</button>
                                <div id="hs-vertically-centered-modal1" className="hs-overlay hidden fixed inset-0   flex items-center justify-center bg-black/50 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-vertically-centered-modal1-label">
                                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
                                        <div className="w-full flex flex-col backdrop-blur-md  shadow-2xs p-10 rounded-xl pointer-events-auto">
                                            <div className="border-gray-200 mx-[90%]">
                                                <button type="button" className="size-8 inline-flex text-white justify-center items-center gap-x-2 rounded-full border border-transparent    focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-vertically-centered-modal1">
                                                    <span className="sr-only">Close</span>
                                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M18 6 6 18"></path>
                                                        <path d="m6 6 12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex justify-center items-center py-3 mb-10">
                                                <img src="/images/Logo.svg" alt=""/>
                                                <h3 id="hs-vertically-centered-modal1-label" className="font-semibold text-2xl text-gray-800">Chef's Kitchen.</h3>
                                            </div>
                                            <div className="flex justify-center items-center gap-4 mb-10">
                                                <button className="flex items-center justify-center gap-2 bg-[#de6752] hover:bg-[#de6752] text-white py-4 px-10 rounded-md text-base font-normal">
                                                    Sign Up
                                                    <img src="/images/search.png" alt="Google" className="w-5 h-5"/>
                                                </button>
                                                <button className="flex items-center justify-center gap-2 bg-[#de6752] hover:bg-[#de6752] text-white py-4 px-10 rounded-md text-base font-normal">
                                                    Sign Up
                                                    <a href="" className="w-5 h-5"><i className="fa-brands fa-github"></i></a>
                                                </button>
                                            </div>
                                            <div className="text-center mb-10">OR</div>
                                                <form onSubmit={handleRegister}>
                                                    <div className="max-w-sm space-y-6">
                                                        <div className="max-w-sm space-y-5 ">
                                                            <input type="text" name="Name" id="Name" onChange={handlechange} className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-[#de6752] focus:border-none disabled:opacity-50 disabled:pointer-events-none" placeholder="Name"/>
                                                        </div>
                                                        <div className="max-w-sm space-y-5 ">
                                                            <input type="text" name="Email" id="Email" onChange={handlechange} className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-[#de6752] focus:border-none disabled:opacity-50 disabled:pointer-events-none" placeholder="Email"/>
                                                        </div>
                                                        <div className="max-w-sm space-y-5">
                                                            <input type="text" name="Password" id="Password" onChange={handlechange} className="w-full px-4 py-3 border border-gray-100  rounded-md focus:outline-none focus:ring-1 focus:ring-[#de6752] focus:border-none disabled:opacity-50 disabled:pointer-events-none " placeholder="Password"/>
                                                        </div>
                                                        <button type="submit" className="w-full bg-[#de6752]  text-base font-medium py-3 rounded-md ">Sign Up</button>
                                                    </div>
                                                </form>
                                            <div className="mt-10 text-white  text-center text-sm ">
                                                <a href="#" ><p className=" mb-3">By creating an account you are agree with our <span className="text-[#de6752] hover:underline">Privacy</span> and <span className="text-[#de6752] hover:underline">Policy</span></p></a>
                                                <a href="#" ><p>Already have an account? <span className="text-[#de6752] hover:underline">Sign In</span></p></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}