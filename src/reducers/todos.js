export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false,
                editable: false,
            }];
        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.id
                    ? Object.assign(todo, { completed: !todo.completed })
                    : todo
            );
        case 'EDIT_TODO':
            return state.map(todo => 
                todo.id === action.id
                    ? Object.assign(todo, { text: action.text, editable: true })
                    : todo
            );
        case 'CANCEL_EDIT':
            return state.map(todo => {
                if (!action.text.trim()) {
                    return Object.assign(todo, { editable: false });
                }
                return todo.id === action.id
                    ? Object.assign(todo, { text: action.text, editable: false })
                    : todo
            });
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed);
        case 'TOGGLE_TODOS':
            if (state.filter(todo => !todo.completed).length === 0) {
                return state.map(todo => Object.assign(todo, { completed: false }));
            }
            return state.map(todo => Object.assign(todo, { completed: true }));
        default:
            return state;
    }
}
