import { useState,useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => { //un hook es una funcion que regresa algo

 const [images, setimages] = useState([])
 const [isLoading,setIsLoading] = useState(true)   

 const getImages = async() =>{
     const newImages = await getGifs(category);
     setimages(newImages);
    setIsLoading(false)
 }

     useEffect(() => { //aqui no se pueden regresar promesas solo funciones
         //getGifs(category);
         getImages();
     },[])// si lo dejo vacio significa que solo se dispara la primera vez que se crea



    return {
        images,
        isLoading
    }
}
