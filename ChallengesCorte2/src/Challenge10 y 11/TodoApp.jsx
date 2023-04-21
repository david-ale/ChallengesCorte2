import { useTodos } from "./useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

export const TodoApp = () =>{
    const {handleNewTodo, substractTodo,todo} = useTodos()
    return (
        <>
            <h1>TodoApp: 10,</h1> <small>pendientes: 2</small>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todo}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
                <div className="col-5">
                    <TodoItem onDeleteTodo={substractTodo}/>
                </div>
            </div>
        </>
    )
}