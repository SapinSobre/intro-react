import '../sass/Todo.scss'
import {useEffect, useRef} from 'react'

const Todo = ({todoValues, setTodoValues, tod}) => {
    let inputDone = useRef()
   
    const handleCheck = (todoVal) => {
        const copyTab = [...todoValues]
        const index = copyTab.findIndex((td) => (
            td === todoVal
        ))
	    copyTab.splice(index, 1)
		setTodoValues(copyTab)
    }
   
    return(                       
        <li className="checkbox_item"> 
            <label>                    
                <input  value={tod} onChange={(e) => handleCheck(e.target.value)} ref={inputDone} className="checkbox_input" type="checkbox"/>
                {tod} 
            </label>                        
        </li>         
    )
}
export default Todo