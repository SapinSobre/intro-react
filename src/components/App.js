import '../sass/App.scss';
import Banner from './Banner'
import Form from './Form'
import List from './List'
import React, {useState, useEffect} from 'react'


function App() {

  const [categories] = useState(["π§βπΌ Administration", "πΆ To pay", "ποΈ To buy", "π§Ή To clean", "π To read", "π» Garden", "π± To phone", "π» To code", "ποΈTo draw", "π΅ Music"])
  const [category, setCategory] = useState() 
  
  const LSKEY = "myTodoApp"
  const [tod, setTod] = useState()
  const [editValue, setEditValue] = useState("")
 
  const savedTodoList = localStorage.getItem({LSKEY} + '.todolist')
  const [todoValues, setTodoValues] = useState(savedTodoList? JSON.parse(savedTodoList):[])
  useEffect(() => {
		window.localStorage.setItem({LSKEY} + '.todolist', JSON.stringify(todoValues))
	},[todoValues]) 

  const savedInProgressTodoList = localStorage.getItem({LSKEY} + '.inprogresstodolist')
  const [inProgressTodoValues, setInProgressTodoValues] = useState(savedInProgressTodoList? JSON.parse(savedInProgressTodoList):[])
  useEffect(() => {
		window.localStorage.setItem({LSKEY} + '.inprogresstodolist', JSON.stringify(inProgressTodoValues))
	},[inProgressTodoValues]) 

  const savedDoneTodoList = localStorage.getItem({LSKEY} + '.donetodolist')
  const [doneTodoValues, setDoneTodoValues] = useState(savedDoneTodoList? JSON.parse(savedDoneTodoList):[])
  useEffect(() => {
    window.localStorage.setItem({LSKEY} + '.donetodolist', JSON.stringify(doneTodoValues))
  },[doneTodoValues])    

  return (
    <div className="main">
        <Banner/>   
        <article className="article">
          <Form  tod={tod} setTod={setTod} categories={categories} category={category} setCategory={setCategory} editValue={editValue} setEditValue={setEditValue} todoValues={todoValues} setTodoValues={setTodoValues}/>
          <List  tod={tod} setTod={setTod} categories={categories} category={category} setCategory={setCategory} editValue={editValue} setEditValue={setEditValue} todoValues={todoValues} setTodoValues={setTodoValues} inProgressTodoValues={inProgressTodoValues} setInProgressTodoValues={setInProgressTodoValues} doneTodoValues={doneTodoValues} setDoneTodoValues={setDoneTodoValues}/> 
        </article>           
    </div>    
  )
}
export default App;
