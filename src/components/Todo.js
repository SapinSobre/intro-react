import '../sass/Todo.scss'
import {useEffect, useRef} from 'react'

const Todo = ({todoValues, setTodoValues, tod}) => {
    const inputDone = useRef()    
    
    const handleCheck = () => {
        const newTab = [...todoValues]
       tod.completed = !tod.completed
       if(tod.completed === true){
           newTab.splice(tod.id)
           setTodoValues(newTab)
       }
       if(todoValues.length == 1){
           newTab.pop()
           setTodoValues(newTab)
       }
    }
   
   
    return(                       
        <li className="checkbox_item"> 
            <label>                    
                <input value={tod.completed} onClick={() => handleCheck()} ref={inputDone} className="checkbox_input" type="checkbox"/>
                {tod.name} 
            </label>                        
        </li>         
    )
}
export default Todo