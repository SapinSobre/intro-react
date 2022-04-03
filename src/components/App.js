import '../sass/App.scss';
import Banner from './Banner'
import Form from './Form'
import List from './List'

function App() {
  return (
    <div className="main">
        <Banner/>   
        <article className="article">
          <Form/>
          <List/> 
        </article>           
    </div>    
  )
}
export default App;
