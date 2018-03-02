import VisibleAddTodo from '../containers/VisibleAddTodo';
import VisibleFooter from '../containers/VisibleFooter';
import VisibleTodoList from '../containers/VisibleTodoList';
import React from 'react';

const App = () => {
    return (
        <div>
            <h2>Editable Todo List App</h2>
            <VisibleAddTodo />
            <VisibleTodoList />
            <VisibleFooter />
        </div>
    );
};

export default App;
