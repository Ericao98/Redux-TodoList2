import { connect } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm';
import { addTodo, toggleTodos } from '../actions';

const isChecked = (todos) => {
    if (todos.length !== 0 && todos.filter(todo => !todo.completed).length === 0)
        return true;
    return false;
};

const mapStateToProps = (state) => ({
    checked: isChecked(state.todos)
});

const mapDispatchToProps = (dispatch) => ({
    onAddClick: (value) => dispatch(addTodo(value)),
    onToggleClick: () => dispatch(toggleTodos()),
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);

export default VisibleTodoList;
