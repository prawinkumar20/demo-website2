import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductData() {

    const { id } = useParams();

    const [productData,setProductData] = useState(null);

    const getProductsdata = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProductData(response.data);
    };



    useEffect(() => {
        getProductsdata();
    }, [id]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return(
        <>
        

        <div>
            <img src={productData.images} alt="" className="h-[200px]"/>
            <div>{productData.title}</div>
        </div>
        </>
    );
}