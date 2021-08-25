import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { handleAdd } from './helpers/handleAdd';


export const GifExpertApp = ()=> {
    
    const [categories, setCategories] = useState([''])
    
   
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <button onClick={()=>setCategories((categories)=>handleAdd(categories))}>Buscar</button>
            <ol>
                {categories.map(category=> <GifGrid key={ category } category={ category }/>)   /*<li key={category}>{category}</li>) */
                }
            </ol>
        </div>
    )
    
};
