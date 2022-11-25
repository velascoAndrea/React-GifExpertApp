//import { useState,useEffect } from "react";
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/GetGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

const {images,isLoading} = useFetchGifs (category);



// const [images, setimages] = useState([])
    
// const getImages = async() =>{
//     const newImages = await getGifs(category);
//     setimages(newImages);

// }

//     useEffect(() => { //aqui no se pueden regresar promesas solo funciones
//         //getGifs(category);
//         getImages();
//     },[])// si lo dejo vacio significa que solo se dispara la primera vez que se crea

  return (
    <>
    <h3>
        {category}

        {

            isLoading && (<h2>Cargando....</h2>)

        }
    </h3>
    <div className="card-grid">
        {/* {
        images.map(({id, title}) => (
            <li key={id}>{title}</li>
        ))
        } */}

        {images.map((image) => (
           <GifItem key={image.id} {...image}/> 
           //esparciendo las propiedades
        ))
        }
       
    </div>
    </>
  )
}
