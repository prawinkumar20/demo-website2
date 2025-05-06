import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main";
import Home from "../Component/Home";
import Products from "../Component/Product/Products";
import Receipies from "../Component/Food/Receipes";
import SingleReceipeData from "../Component/Food/SingleReceipeData";
import SingleProductData from "../Component/Product/SingleProductData";

export default function Approuter () {

    return(
        <>
        <BrowserRouter>
        <Routes>

            <Route element={<Main/>}>
            <Route path="/" element={<Home/>} />
            </Route>
            <Route path="/products" element={<Products/>}/>
            <Route path="/receipies" element={<Receipies/>}/>
            <Route path="/singledata/:id" element={<SingleReceipeData/>}/>
            <Route path="/singleproductdata/:id" element={<SingleProductData/>}/>


        </Routes>
        
        
        </BrowserRouter>
        </>
    )
}