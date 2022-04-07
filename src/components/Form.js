import '../sass/Form.scss'
import {useRef} from 'react'

const Form = ({todoValues, setTodoValues}) => { 
	const inputRef = useRef();
<<<<<<< HEAD

	function clickHandler() {
		const inputElement = inputRef.current;
		const newTab = [...todoValues]
		newTab.push(inputElement.value)
		setTodoValues(newTab)
	}
  
=======
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
>>>>>>> f30ae2f1c7ee8fca805d9606b4053184c3619327
	return (
	  <div className="addTodoForm">
		<input className="addTodoForm_input" ref={inputRef} type="text" placeholder="Write a new todo" />
		<br />
<<<<<<< HEAD
		<button className="addTodoForm_button" onClick={clickHandler}>Add todo</button>
=======
		<button className="addTodoForm_button" onClick={() => clickHandler()}>Add todo</button>
>>>>>>> f30ae2f1c7ee8fca805d9606b4053184c3619327
	  </div>
	);
}
export default Form