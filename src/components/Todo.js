import '../sass/Todo.scss'
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
    )
}
export default Todo