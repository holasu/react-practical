import React from 'react'
import TodoItem from "./TodoItem"
import todoData from "./todoData"

function App(){
    const todoItems = todoData.map( item => <TodoItem key={item.id} item={item}/>)
    return(
        <div className="todo-item">
            {todoItems}
        </div>
    );
}
export default App;