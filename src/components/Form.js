import '../sass/Form.scss'
import {useRef} from 'react'

const Form = ({todoValues, setTodoValues}) => { 
	const inputRef = useRef();
	function clickHandler() {
		const inputElementValue = inputRef.current.value;
		const newTodoObject = {
			id: todoValues.length,
			name: inputElementValue,
			completed: false
		}		
		const tabCopy = [...todoValues]
		tabCopy.push(newTodoObject)
		setTodoValues(tabCopy)
	}  
	return (
	  <div className="addTodoForm">
		<input className="addTodoForm_input" ref={inputRef} type="text" placeholder="Write a new todo" />
		<br />
		<button className="addTodoForm_button" onClick={() => clickHandler()}>Add todo</button>
	  </div>
	);
}
export default Form