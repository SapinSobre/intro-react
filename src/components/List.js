import '../sass/List.scss'
import Todo from './Todo.js'
import React, {v4 as uuidv4} from 'uuid'

const List = ({todoValues, setTodoValues}) => {    
    
    return(       
        <div>
            <h2 className="listCheckbox_title">Todos</h2>  
            <ul className="listCheckbox">                
                {
                    todoValues.map((tod) => (                 
                        <div className="listCheckbox_item" key={`${tod.id}-${uuidv4}`}>
                            <Todo todoValues={todoValues} setTodoValues={setTodoValues} tod = {tod}/>
                        </div>
                    ))
                }             
            </ul>  
            
        </div>  
    )
}
export default List