import '../sass/Categories.scss'
import {useRef, useState, useEffect} from 'react'
import React, {v4 as uuidv4} from 'uuid'

const Categories = ({category, setCategory, categories}) => {
    const catRef = useRef("")  
    const [value, setValue] = useState("")  




    const handleChange = (event) => {
        setValue(event.value) 
        setCategory(event.value)              
    }
        
    return(
            <select
                value={value}
                onChange={(e) => handleChange(e.target)}
                className="categories"              
            >              
                <option className="categories_select" value="">Todos categories</option>
                {categories.map((categ) => (
                    <option  value={categ} className="categories_inputSelect" key={`${categ}-${uuidv4}`}>{categ}</option>
                ))}
            </select>
    )
}
export default Categories