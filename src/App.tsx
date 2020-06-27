import React from 'react';
import { TodoListTerm } from './TodoListTerm';


const todos :Array<Todo>=[
  {text:'Walk the dog',complete:true},
  {text:'Write app',complete:false}
]
export const App:React.FC = ()=>{
  return (
<React.Fragment>
    <TodoListTerm todo={todos[0]}/>
    <TodoListTerm todo={todos[1]}/>
    </React.Fragment>
  );
}

export default App;
