import axios from "axios";

export const getCategories = async() =>{
    return await axios.get("https://api.chucknorris.io/jokes/categories")
}

export const getJoke = async(categoryName) =>{
    return await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
}