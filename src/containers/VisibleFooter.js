import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setFilter, clearCompleted } from '../actions';

const isDisabled = (todos) => {
    if (todos.length === 0 || todos.filter(todo => todo.completed).length === 0)
        return true;
    return false;
};

const mapStateToProps = (state) => ({
    disable: isDisabled(state.todos),
    filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
    onFilterClick: (filter) => dispatch(setFilter(filter)),
    onClearClick: () => dispatch(clearCompleted()),
});

const VisibleFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default VisibleFooter;
