import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleReceipeData() {
    const { id } = useParams();

    const [receipesData, setReceipesData] = useState(null);

    const getReceipesdata = async () => {
       
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setReceipesData(response.data);
       
    };

    useEffect(() => {
        getReceipesdata();
    }, [id]);

    if (!receipesData) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
        <div>
        <img src={receipesData.image} alt="" className="h-[200px]"/>
        <div>{receipesData.name}</div>
        </div>
        
        </>
    );
}
