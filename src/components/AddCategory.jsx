import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        //prevenir el comportamiento por defecto del form
        //es decir, prevenir que se recarge
        e.preventDefault();


        if (inputValue.trim().length > 2) {

            //categs representa el valor inicial
            //el valor del arreglo categories
            //que se encuentra en el componoente GifExpertApp
            //y a ese valor le agregamos el input value
            setCategories(categs => [inputValue, ...categs]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory;