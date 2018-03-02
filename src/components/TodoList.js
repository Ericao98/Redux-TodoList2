import Todo from './Todo';
import React from 'react';

const TodoList = ({ todos, onTodoClick, editTodo, onTodoBlur , onTodoDelete }) => {
    return (
        <div
            style={{
                margin: '10px',
                width: '500px',
                height: '300px',
                overflow: 'auto',
                border: '1px solid gray',
            }}
        >
            <dl>
                {
                    todos.map(todo => 
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                            editTodo={(text) => editTodo(todo.id, text)}
                            onBlur={(text) => onTodoBlur(todo.id, text)}
                            onDelete={() => onTodoDelete(todo.id)}
                        />
                    )
                }
            </dl>
        </div>
    );
};

export default TodoList;
