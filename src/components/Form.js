import '../sass/Form.scss'
import {useRef} from 'react'

const Form = ({todoValues, setTodoValues}) => { 
	const inputRef = useRef();

	function clickHandler() {
		const inputElement = inputRef.current;
		const newTab = [...todoValues]
		newTab.push(inputElement.value)
		setTodoValues(newTab)
	}
  
	return (
	  <div className="addTodoForm">
		<input className="addTodoForm_input" ref={inputRef} type="text" placeholder="Write a new todo" />
		<br />
		<button className="addTodoForm_button" onClick={clickHandler}>Add todo</button>
	  </div>
	);
}
export default Form