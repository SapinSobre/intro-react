import '../sass/Form.scss'
import {useRef} from 'react'
import Categories from './Categories'

const Form = ({categories, category, setCategory, tod, setTod, editValue, setEditValue, todoValues, setTodoValues}) => { 
	const inputRef = useRef()
	let todoObject = {tod}
	
	const addTodo = () => {
	
		const inputElementValue = inputRef.current.value;
		let catIcon = category;
		if(category.length > 1){
			catIcon = category.substr(0, 2)
		}	
		const newTodoObject = {
			id: todoValues.length,
			name: inputElementValue,
			inProgress: false,
			done: false, 
			category: catIcon
		}
		setTod(newTodoObject)	
		const tabCopy = [...todoValues]
		tabCopy.push(newTodoObject)		
		setTodoValues(tabCopy)	
	} 

	const updateVal = (val) => {
		todoObject = todoValues.filter((todo) => (
			todo.name === editValue
		))
		setEditValue(val)
	}
	
	const editTodo = () => {
		
		const inputTodo = inputRef.current.value
		const tab2Copy = [...todoValues]
		let td = tab2Copy.map((editEl) => (		
			editEl.name === todoObject[0].name? editEl.name = inputTodo: editEl.name
		))	
		setTodoValues(tab2Copy)			
	}

	return	editValue === "" ?(
		<form className="form">
			<input className="form_input" ref={inputRef} type="text" placeholder={"Write a new todo"} />
			<br />
			<Categories categories={categories} category={category} setCategory={setCategory}/>
			<br/>
			<button className="form_button" onClick={() => addTodo()}>Add todo</button>
		</form>
		): <form className="form">
			<input defaultValue={editValue} onBlur={(e) => updateVal(e.target.defaultValue)} className="form_input" ref={inputRef} type="text" placeholder={"Write a new todo"} />
			<br />
			<button className="form_button" onClick={() => editTodo()}>Edit todo</button>
		</form>	
}
export default Form