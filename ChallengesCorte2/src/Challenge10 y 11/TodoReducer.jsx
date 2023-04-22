export const TodoReducer = (initialState = [], action) =>{
    switch (action.type){
        case '[TODO] ADD TODO':
            console.log(initialState)
            return [...initialState,action.payload]  
        case '[TODO] DELETE TODO':
            return initialState.filter(item =>item !== action.payload)
        case '[TODO] TOGGLE TODO':
            const todo = initialState.find(item => item.id === action.payload.id)
            if(todo.changes === 1){
                todo.done = !todo.done
                todo.changes = 0
            }else{
                todo.changes += 1
            }
            console.log(initialState)
            return initialState
        default:
            return initialState;
    }
}