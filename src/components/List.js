import '../sass/List.scss'
import Todo from './Todo.js'
import React, {v4 as uuidv4} from 'uuid'
import Categories from './Categories'

const List = ({tod, setTod, editValue, setEditValue, categories, category, setCategory, todoValues, setTodoValues, inProgressTodoValues, setInProgressTodoValues, doneTodoValues, setDoneTodoValues}) => {     
    
   
    return(  
        <div className="dashboard">  
            <Categories category={category} setCategory={setCategory} categories={categories}/>
            <div className="listBox">
                <div className="listCheckbox">
                    <h2 className="listCheckbox_title">Todos</h2>  
                    <button className="listCheckbox_emptyButton" onClick={() => {setTodoValues([])}}>Effacer la liste</button>     
                    <ul className="listCheckbox">                
                        {                           
                            todoValues.map((td) => (                                             
                                <Todo key={`${td.id}-${uuidv4}`} tod={td} setTod={setTod} columnNumber="1" editValue={editValue} setEditValue={setEditValue}todoValues={todoValues} setTodoValues={setTodoValues} inProgressTodoValues={inProgressTodoValues} setInProgressTodoValues={setInProgressTodoValues} doneTodoValues={doneTodoValues} setDoneTodoValues={setDoneTodoValues}/>
                            ))
                        }             
                    </ul>                     
                </div>
                <div className="listCheckbox">
                    <h2 className="listCheckbox_title">In progress todos</h2>  
                    <button className="listCheckbox_emptyButton" onClick={() => {setInProgressTodoValues([])}}>Effacer la liste</button>     
                    <ul className="listCheckbox">                
                        {
                            inProgressTodoValues.map((td) => (                      
                                <Todo key={`${td.id}-${uuidv4}`} tod={td} setTod={setTod} columnNumber="2"  editValue={editValue} setEditValue={setEditValue} todoValues={todoValues} setTodoValues={setTodoValues} inProgressTodoValues={inProgressTodoValues} setInProgressTodoValues={setInProgressTodoValues} doneTodoValues={doneTodoValues} setDoneTodoValues={setDoneTodoValues}/>
                            ))
                        }             
                    </ul>  
                </div>    
                <div className="listCheckbox">
                    <h2 className="listCheckbox_title">Done todos</h2>  
                    <button className="listCheckbox_emptyButton" onClick={() => {setDoneTodoValues([])}}>Effacer la liste</button>     
                    <ul className="listCheckbox">                
                        {
                            doneTodoValues.map((td) => (                      
                                <Todo key={`${td.id}-${uuidv4}`} tod={td} setTod={setTod} columnNumber="3" editValue={editValue} setEditValue={setEditValue} todoValues={todoValues} setTodoValues={setTodoValues} inProgressTodoValues={inProgressTodoValues} setInProgressTodoValues={setInProgressTodoValues} doneTodoValues={doneTodoValues} setDoneTodoValues={setDoneTodoValues}/>
                            ))
                        }             
                    </ul>  
                </div>                      
            </div>            
        </div>               
    )
}
export default List