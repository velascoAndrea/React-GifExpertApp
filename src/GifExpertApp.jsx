import {useState}  from 'react'
import {AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {
  const [categories, seTcategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {

    //aqui faltaria las validaciones si son el mismo nombre pero con mayusculas y minusculas
    if(categories.includes(newCategory)){return;}

    //no usar push para no mutar el objeto
   //seTcategories(['Valorant',...categories]);
   //segunda opcion
   //seTcategories(cat => [...cat,'Valorant']);
   seTcategories([newCategory,...categories]);
  }


  return (
    <>
    {/*Titulo*/}
    <h1>GifExpertApp</h1>
    {/*Input */}
    <AddCategory
     //setCategories={seTcategories}
     onNewCategory={value => onAddCategory(value)}
     />
    {/*Listado de Gif*/}
 
     
      {categories.map(category =>
        (
          // <div key={category}>
          //   <li>{category}</li>
          // </div>
          <GifGrid key={category} category={category}/>
        ) 
        
        
      )}
      {/* No usar el indice i por que react puede confundirse */}

    {/* Gif Item  */}
    
    
    </>
  )
}

export default GifExpertApp;