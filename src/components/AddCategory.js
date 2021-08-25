import React, { useState } from 'react'
import PropTypes from 'prop-types';
//import { handleAdd } from '../helpers/handleAdd';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('Ingrese una nueva categoria')

    const handleChanges = (e)=>{ 
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
        setCategories(cats=>[inputValue]);
        
        }
        setInputValue('')
        //document.getElementById('forma').blur();

    }
    const verInput = (e)=>{
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit} onFocus={verInput}>
          <input
          id='forma'
          type="text"
          value={ inputValue }
          onChange={handleChanges}
          autoComplete={'off'}
          />  
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
