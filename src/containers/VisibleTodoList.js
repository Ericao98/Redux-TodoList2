import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, editTodo, cancelEdit, deleteTodo } from '../actions';

const getVisibleTodoList = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('Unexpected filter: ', filter);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodoList(state.todos, state.filter)
});
const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => dispatch(toggleTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id, text)),
    onTodoBlur: (id, text) => dispatch(cancelEdit(id, text)),
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
