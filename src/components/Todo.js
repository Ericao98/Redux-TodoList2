import React from 'react';

const DecoratedText = ({ text, completed }) => {
    return (
        <span
            style={{
                color: completed ? 'lightgray' : 'black',
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </span>
    );
};

const Todo = ({ text, completed, editable, onClick, editTodo, onBlur, onDelete }) => {

    let input;

    return (
        <dt>
            <div style={{ clear: 'both' }}>
                <div style={{ float: 'left' }}>
                    <input
                        type="checkbox"
                        onClick={onClick}
                        checked={completed}
                        onChange={(e) =>
                            e.target.checked = completed
                        }
                    />
                    <span
                        onDoubleClick={() => {
                            editTodo(text);
                        }}
                    >
                        {
                            editable
                                ?
                                <input
                                    autoFocus
                                    defaultValue={text}
                                    ref={node => input = node}
                                    onBlur={() => onBlur(input.value)}
                                />
                                :
                                <DecoratedText
                                    text={text}
                                    completed={completed}
                                />
                        }
                    </span>
                </div>
                <div style={{ float: 'right' }}>
                    <button
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </dt>
    )
};

export default Todo;
