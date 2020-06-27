import React from 'react';
import "./TodoListTerm.css";

interface TodoListTermProps {
    todo: Todo;
}
export const TodoListTerm: React.FC<TodoListTermProps> = ({ todo }) => {
    return <li>
        <label
             className={todo.complete?"complete":undefined}>
            <input type="checkbox" checked={todo.complete} />
            {todo.text}

        </label>
    </li>
}