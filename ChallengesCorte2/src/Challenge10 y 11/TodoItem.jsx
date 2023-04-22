export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) =>{

    var itemClass = classNames({
        'align self-center': true,
        'list-group-item d-flex justify-content-between': todo.done,
      });
    return(
        <li className='list-group-item d-flex justify-content-between'>
            <span 
             onClick={()=> {onToggleTodo(todo)}} className ={itemClass}      
            >
            {todo.description}
 
            </span>
            <button className='btn btn-danger' onClick={()=> {onDeleteTodo(todo)}}>Borrar</button>
        </li>
    )
}