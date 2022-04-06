import '../sass/Form.scss'
import {useState} from 'react'

const Form = ({todoValues, setTodoValues}) => { 
	const [val, setVal] = useState("")
	const updateTodoValues = (inputValue, e) => {
		e.preventDefault()
		setVal(inputValue)			
	}
	const addNewTodo = (e) => {
		e.preventDefault()
		let newTodoValues = [...todoValues]
		newTodoValues.push(val)
		setTodoValues(newTodoValues)
	}
    return(
        <form className="addTodoForm">
            <input onBlur={(e) => updateTodoValues(e.target.value, e)} className="addTodoForm_input" type="text" placeholder="Please enter a new todo"/>
            <button onClick={(e) => addNewTodo(e)} className="capitalize addTodoForm_button">add todo</button>
        </form>
    )
}
export default Form