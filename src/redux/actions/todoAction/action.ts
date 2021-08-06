import { Dispatch } from "react"
import { TodoAction } from "./action.type"
import { ActionTypes } from "./actionTypes"

export const handleAddTodo = (todoName: string) => {
    return ((dispatch: Dispatch<TodoAction>) => {
        dispatch({
            type: ActionTypes.ADD_TODO,
            payload: todoName,
        })
    })
}

export const handleDeleteTodo = (todoName: string) => {
    return ((dispatch: Dispatch<TodoAction>) => {
        dispatch({
            type: ActionTypes.DELETE_TODO,
            payload: todoName,
        })
    })
}