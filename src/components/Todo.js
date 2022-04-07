import '../sass/Todo.scss'
<<<<<<< HEAD
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
=======
import {useRef} from 'react'

const Todo = ({todoValues, setTodoValues, tod}) => {
    const checkRef = useRef(null) 

    const ifCheckFunction = () => {
        let newTabTd = []
        if(checkRef.current.checked){                     
            todoValues.map((td) => {
                if(td.name !== tod.name){
                    newTabTd.push(td)
                } 
                return newTabTd
            })
        }
        setTodoValues(newTabTd)
    }

    return (
        <li className="listCheckbox_item">
            <input onChange={() => {ifCheckFunction()}} type="checkbox" ref={checkRef}/>
            {tod.name}          
        </li>
>>>>>>> f30ae2f1c7ee8fca805d9606b4053184c3619327
    )
}
export default Todo