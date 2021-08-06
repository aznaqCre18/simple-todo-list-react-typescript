import { ActionTypes } from "./actionTypes";

interface AddTodo {
    type: ActionTypes.ADD_TODO,
    payload: string
}

interface DeleteTodo {
    type: ActionTypes.DELETE_TODO,
    payload: string
}

export type TodoAction = AddTodo | DeleteTodo;