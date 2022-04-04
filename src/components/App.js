import '../sass/App.scss';
import Banner from './Banner'
import Form from './Form'
import List from './List'
import React, {useState} from 'react'

function App() {
  const [todoValues, setTodoValues] = useState([])
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
