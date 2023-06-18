import { useState } from 'react'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [idCount, setIdCount] = useState(Number(0));

  const AddTodo = () => {
    const [todoElem,setTodoElem] = useState({
      todoId:-1,
      todotitle:"",
      tododesc:"",
      completeState:true
    });
    function addClick(e){
      e.preventDefault();
      const title = document.getElementById("title").value;
      const desc = document.getElementById("desc").value;
      console.log(idCount)
      setTodoElem({...todoElem,
        todoId:idCount,
        todotitle : title,
        tododesc : desc,
        completeState: false
      }); 

    } 
    return(
      <>
      <h1>Add Your todo here</h1>
      <form>
        <label>Title: <input type="text" id="title" /></label>
        <label>Description: <input type="text" id="desc" /></label>
        <button onClick={addClick}>Add Todo</button>
      </form>
      <ListTodo elem = {todoElem} />
      </>
    );

  }

  const ListTodo = (props) => {
    let x = props.elem;
    console.log(x);
    function addToList(){
      setIdCount((prevstate) => {return (prevstate+1)});
      setTodoList(()=>{
        return[ ...todoList,
          {
            ...props.elem
          }
        ]
      })
    }
    return(
      <>
      <button onClick={addToList}>add to list</button>
      </>
    )
  }
  
  const ShowTodo = () => {
    console.log(todoList);
    console.log(idCount);
    function deletThis(id){
      let newtodoList = todoList.filter(one => one.todoId !== id)
      setTodoList(newtodoList);
    }
    return(
      <>
      <div id='list'>
        {todoList.map((one) => (
          <div id = {one.todoId}><h1>title:{one.todotitle}</h1><p>{one.tododesc}</p><input type="checkbox" name="" onClick={()=>deletThis(one.todoId)} /></div>
        ))}
      </div>
      </>
    )
  }
  
  return(
    <>
    <AddTodo/>
    <ShowTodo/>
    <button onClick={() => window.location.reload(true)}>Hard Reset</button>
    </>
  )
};
export default Todo;
