import '../sass/Todo.scss'
import {useRef} from 'react'
import previous from '../assets/previous.png'
import next from '../assets/next.png'
import close from '../assets/close.png'
import edit from '../assets/edit.png'

const Todo = ({tod, setTod, columnNumber, editValue, setEditValue, todoValues, setTodoValues, inProgressTodoValues, setInProgressTodoValues, doneTodoValues, setDoneTodoValues}) => {
    const doneRef = useRef(null)
    const closeRef = useRef(null)
    const editRef = useRef(null)
    const listCategory = tod.category.substr(0,2)

    const nextFunction = () => { 
        switch(columnNumber){
            case "1":   tod.inProgress = true
                        tod.done = false
                        let copyTab = [...inProgressTodoValues]
                        copyTab.push(tod)
                        setInProgressTodoValues(copyTab)
                        closeFunction()
                    break;
            case "2":   tod.inProgress = false
                        tod.done = true
                        let copyProgressTab = [...doneTodoValues]
                        copyProgressTab.push(tod)
                        setDoneTodoValues(copyProgressTab);
                        closeInProgressFunction()
                break;
            default: alert("Oups...");
        }       
    }

    const previousFunction = () => {
        switch(columnNumber){
            case "2":   tod.inProgress = false
                        tod.done = false
                        let copyTab = [...todoValues]
                        copyTab.push(tod)
                        setTodoValues(copyTab)
                        closeInProgressFunction()
                    break;
            case "3":   tod.inProgress = true
                        tod.done = false
                        let copyProgressTab = [...inProgressTodoValues]
                        copyProgressTab.push(tod)
                        setInProgressTodoValues(copyProgressTab);
                        closeDoneFunction()
                break;
            default: alert("Oups...");
        }     
    }

    const editFunction = (todoVal) => {
        setEditValue(todoVal)        
    }

    const closeFunction = () => {
        let newTabTd = []
        let reponse = true 
        if(tod.inProgress === false && tod.done === false) {
            reponse = window.confirm("Etes-vous certain(e) de vouloir supprimer définitivement ce todo?")
        }       
        if(reponse === true){              
            todoValues.map((td) => {
                if(td.name !== closeRef.current.name){
                    newTabTd.push(td)
                } 
                return newTabTd
            })        
        setTodoValues(newTabTd)
        }
    }
    const closeInProgressFunction = () => {
        let newTabTd = []
        let reponse = true 
        if(tod.inProgress === true) {
            reponse = window.confirm("Etes-vous certain(e) de vouloir supprimer définitivement ce todo?")
        }       
        if(reponse === true){               
            inProgressTodoValues.map((td) => {
                if(td.name !== closeRef.current.name){
                    newTabTd.push(td)
                } 
                return newTabTd
            })
            setInProgressTodoValues(newTabTd)
        }        
    }
    const closeDoneFunction = () => {
        let newTabTd = []  
        let reponse = true 
        if(tod.done === true) {
            reponse = window.confirm("Etes-vous certain(e) de vouloir supprimer définitivement ce todo?")
        }       
        if(reponse === true){                                  
            doneTodoValues.map((td) => {
                if(td.name !== closeRef.current.name){
                    newTabTd.push(td)
                } 
                return newTabTd
            })
            setDoneTodoValues(newTabTd)           
        }     
    }

    return columnNumber === "1" ? (      
        <li className="listCheckbox_item">            
            <img ref={doneRef} className="nextIcon" onClick={() => {nextFunction()}} src={next} alt="next arrow"/> 
            {`${listCategory} ${tod.name}`} 
            <img name={tod.name} ref={editRef} className="editIcon" onClick={(e) => {editFunction(e.target.name)}} src={edit} alt="edit icon"/>      
            <img ref={closeRef} className="deleteIcon" onClick={() => {closeFunction()}} src={close} alt="close icon" name={tod.name} />
        </li>
    ): columnNumber === "2" ? (
        <li className="listCheckbox_item">            
            <img ref={doneRef} className="previousIcon" onClick={() => {previousFunction()}} src={previous} alt="previous arrow"/>
            <img ref={doneRef} className="nextIcon" onClick={() => {nextFunction()}} src={next} alt="next arrow"/>
            {tod.name}  
            <img ref={editRef} className="editIcon" onClick={() => {editFunction()}} src={edit} alt="edit icon"/>      
            <img ref={closeRef} className="deleteIcon" onClick={() => {closeInProgressFunction()}} src={close} alt="close icon" name={tod.name} />
        </li>
    ): <li className="listCheckbox_item">            
            <img ref={doneRef} className="previousIcon" onClick={() => {previousFunction()}} src={previous} alt="previous arrow"/>
            {tod.name}  
            <img ref={editRef} className="editIcon" onClick={() => {editFunction()}} src={edit} alt="edit icon"/>      
            <img ref={closeRef} className="deleteIcon" onClick={() => {closeDoneFunction()}} src={close} alt="close icon" name={tod.name} />
        </li>
}
export default Todo