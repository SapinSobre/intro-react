import '../sass/App.scss';
import Banner from './Banner'
import Form from './Form'
import List from './List'
import React, {useState, useEffect} from 'react'

function App() {
  const LSKEY = "myTodoApp"
  const savedTodoList = localStorage.getItem({LSKEY} + '.todolist')
  const [todoValues, setTodoValues] = useState(savedTodoList? JSON.parse(savedTodoList):[])
  useEffect(() => {
		window.localStorage.setItem({LSKEY} + '.todolist', JSON.stringify(todoValues))
	},[todoValues]) 

  return (
    <div className="main">
        <Banner/>   
        <article className="article">
          <Form todoValues={todoValues} setTodoValues={setTodoValues}/>
          <List todoValues={todoValues} setTodoValues={setTodoValues}/> 
        </article>           
    </div>    
  )
}
export default App;
