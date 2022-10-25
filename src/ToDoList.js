import React from 'react'
import Todo from './ToDo'

const ToDoList = ({toDoList}) => {
    return(
        <div>
            {toDoList.map(todo =>{
                return(
                    <Todo todo={todo} />
                )
            })}
        </div>
    )
}





export default ToDoList