import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products () {

    const [productData, setProductData] = useState([]);
    const [searchItems, setSearchItems] = useState('');

    const getProductsdata = async() =>{
        const response = await axios.get('https://dummyjson.com/products',productData);
        setProductData(response.data.products);
        console.log(response);
      }

    const searchProducts = async(e) =>{
        const searchTerm = e.target.value;
        setSearchItems(searchTerm);
        const res = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
        setProductData(res.data.products);
    }

    useEffect(()=>{
        getProductsdata();
    },[]);

    return(
        <>
        <div className="mb-5 flex justify-center items-center mt-5">
            <input type="text" className="border-2 w-52 p-3 rounded-lg" placeholder="Search Products" value={searchItems} onChange={searchProducts}/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            { productData.map(res=>
            <>
            <div className="border p-3 rounded-2xl">
                <img src={res.images} alt="" className="h-[80px]" />
                <h1 className="text-blue-500">Title : {res.title}</h1>
                <p>Category : {res.category}</p>
                <p>Price : {res.price}</p>
                <Link to={`/singleproductdata/${res.id}`}>
                    <p className="font-bold">Click here !!!</p>
                </Link>
            </div>
            
            </>
            )}
        </div>
        </>
    )
}