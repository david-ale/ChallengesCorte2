export const TodoReducer = () =>{
    switch (action.type){
        case '[TODO] ADD TODO':
            return [...initialState,action.payload]
        case '[TODO] DELETE TODO':
            return [...initialState,action.payload]    
        default:
            return initialState;
    }
}