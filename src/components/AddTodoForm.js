import React from 'react';

const AddTodoForm = ({ checked, onAddClick, onToggleClick }) => {

    let input;

    return (
        <div style={{ margin: '10px' }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return ;
                    }
                    onAddClick(input.value);
                    input.value = "";
                }}
            >
                <input type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                        onToggleClick();
                        e.target.checked = checked;
                    }}
                />
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodoForm;
