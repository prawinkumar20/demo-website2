import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Receipes () {

    const [receipesData, setReceipesData] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [mealType, setMealType] = useState('');

    const getReceipesdata = async() =>{
        const response = await axios.get('https://dummyjson.com/recipes',receipesData);
        setReceipesData(response.data.recipes);
        console.log(response);
    }

    const searchRecipes = async(e) =>{
        const searchTerm = e.target.value;
        setSearchItems(searchTerm);
        const res = await axios.get(`https://dummyjson.com/recipes/search?q=${searchTerm}`);
        setReceipesData(res.data.recipes);
    }

    const handleSort = (option) => {
        setSortOption(option);
        const sortedData = [...receipesData];

        if (option === 'name') {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }

        setReceipesData(sortedData);
    };

    const filterByMealType = async (type) => {
        setMealType(type);
        const response = await axios.get('https://dummyjson.com/recipes');
        const filtered = response.data.recipes.filter(r => r.mealType.includes(type));
        setReceipesData(filtered);
    }


    useEffect(()=>{
        getReceipesdata();
    },[]);



    return (
        <>
        <div className="mb-5 flex justify-center items-center mt-5 gap-5">
            <input type="text" className="border-2 w-52 p-3 rounded-lg" placeholder="Search Products" value={searchItems} onChange={searchRecipes}/>
            <select className="border-2 p-3 rounded-lg" value={sortOption} onChange={(e) => handleSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="name">Name (A-Z)</option>
                <option value="rating">Rating (High to Low)</option>
            </select>
            <select className="border-2 p-3 rounded-lg" value={mealType} onChange={(e) => filterByMealType(e.target.value)}>
            <option value="">Filter by Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Beverage">Beverage</option>
                <option value="Side Dish">Side Dish</option>
                <option value="Dessert">Dessert</option>
                <option value="Appetizer">Appetizer</option>

            </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            { receipesData.map(res=>
            <>
            <div className="border p-3 rounded-2xl">
                <img src={res.image} alt="" className="h-[200px]"/>
                <h1 className="text-blue-500">Name : {res.name}</h1>
                <p>Ingredients : {res.ingredients}</p>
                <p>Instructions : {res.instructions}</p>
                <p>Rating : {res.rating}</p>
                <p>Meal Type :{res.mealType}</p>
                <Link to={`/singledata/${res.id}`}>
                    <p className="font-bold">Click here !!!</p>
                </Link>
            </div>
            </>
            )}
        </div>
        
        </>
    )
}