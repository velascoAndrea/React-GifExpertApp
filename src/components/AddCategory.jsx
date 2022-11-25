import {useState}  from 'react'

export const AddCategory = ({/*setCategories*/ onNewCategory}) => {

const [inputaValue, setinputaValue] = useState('')

const onInputChange  =(event) =>{
    setinputaValue(event.target.value);
}

const onSubmit=(event)=>{
    event.preventDefault(); //para que no se actualize la pagina

    //para que no inserte valores igiales o menores
    if(inputaValue.trim().length <=1) return;

    //callback para que mande las categorias que ya estan en el estado
    //setCategories(categories =>[inputaValue,...categories])
    onNewCategory(inputaValue.trim());
    //borrar input
    setinputaValue('');
}

  return (
    <form onSubmit={(event) => onSubmit(event) }>
    <input 
    type="text"
    placeholder="Buscar Gifs"
    value={inputaValue}
    onChange={(event) => onInputChange(event)}
    
    />
    {/*se puede obviar que se envia el even */}


    </form>
    
  )
}
