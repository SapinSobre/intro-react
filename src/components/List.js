import '../sass/List.scss'
import Todo from './Todo.js'
import React, {v4 as uuidv4} from 'uuid'

const List = ({todoValues, setTodoValues}) => {     
    return(       
        <div className="listCheckbox">
            <h2 className="listCheckbox_title">Todos</h2>  
            <ul className="listCheckbox">                
                {
                    todoValues.map((tod) => (                      
                        <Todo key={`${tod.id}-${uuidv4}`} todoValues={todoValues} setTodoValues={setTodoValues} tod={tod}/>
                    ))
                }             
            </ul> 
            <button onClick={() => {setTodoValues([])}}>Effacer la liste</button>             
        </div>  
    )
}
export default List