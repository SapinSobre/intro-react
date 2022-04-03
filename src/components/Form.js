import '../sass/Form.scss'

const Form = () => {
    return(
        <form className="addTodoForm">
            <input className="addTodoForm_input" type="text"/>
            <button className="capitalize addTodoForm_button">add todo</button>
        </form>
    )
}
export default Form