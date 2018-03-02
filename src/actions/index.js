let nextId = 0;

export const addTodo = (text) => ({ type: 'ADD_TODO', text, id: nextId++ });
export const toggleTodos = () => ({ type: 'TOGGLE_TODOS' });
export const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', id });
export const editTodo = (id, text) => ({ type: 'EDIT_TODO', text, id });
export const cancelEdit = (id, text) => ({ type: 'CANCEL_EDIT', text, id });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO', id });
export const clearCompleted = () => ({ type: 'CLEAR_COMPLETED' });
export const setFilter = (filter) => ({ type: 'SET_FILTER', filter });
