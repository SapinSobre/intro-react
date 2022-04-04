import '../sass/Todo.scss'
import React, {useState} from 'react'

const Todo = ({tod}) => {
    const [checkValue, setCheckValue] = useState(false)
    checkValue && alert(`C'est vrai! ${tod} est en cours en fait!!`)
    return(                       
        <li className="checkbox_item"> 
            <label>                    
                <input onChange={(e) => setCheckValue(!checkValue)} className="checkbox_input" type="checkbox"/>
                {tod} 
            </label>                        
        </li>         
    )
}
export default Todo