import { useState } from 'react'

const Todo = () => {
  const [todoList, setTodoList] = useState([""]);

  const AddTodo = () => {
    const [todoElem,setTodoElem] = useState({
      todotitle:"",
      tododesc:"",
      completeState:true
    });
    function addClick(e){
      e.preventDefault();
      const title = document.getElementById("title").value;
      const desc = document.getElementById("desc").value;
      setTodoElem({
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
  }
  return(
    <>
    <AddTodo/>
    <ShowTodo/>
    </>
  )
};
export default Todo;
