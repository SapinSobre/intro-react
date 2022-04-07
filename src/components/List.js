import '../sass/List.scss'
import Todo from './Todo.js'
import React, {v4 as uuidv4} from 'uuid'

const List = ({todoValues, setTodoValues}) => {     
    return(       
        <div className="listCheckbox">
            <h2 className="listCheckbox_title">Todos</h2>  
            <ul className="listCheckbox">                
                {
<<<<<<< HEAD
                    todoValues.map((tod) => (                 
                        <div className="listCheckbox_item" key={`${tod}-${tod}-${uuidv4}`}>
                            <Todo todoValues={todoValues} setTodoValues={setTodoValues} tod={tod} />
                        </div>
                    ))
                }             
            </ul>            
=======
                    todoValues.map((tod) => (                      
                        <Todo key={`${tod.id}-${uuidv4}`} todoValues={todoValues} setTodoValues={setTodoValues} tod={tod}/>
                    ))
                }             
            </ul> 
            <button onClick={() => {setTodoValues([])}}>Effacer la liste</button>             
>>>>>>> f30ae2f1c7ee8fca805d9606b4053184c3619327
        </div>  
    )
}
export default List