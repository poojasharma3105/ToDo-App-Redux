import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import {useDispatch}  from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) =>state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markHandler = (id) =>{
        dispatch(markAsDone(id));
    };
    return(
        <>
            <h2>Todo List App</h2>
            <AddForm/>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}> 
                      <span style= {todo.isDone ? { textDecorationLine: "line-through" } : {}}> 
                        {todo.task} 
                      </span>
                      <button onClick={ () => clickHandler(todo.id)}>Delete</button>
                      <button onClick = { () => markHandler(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}