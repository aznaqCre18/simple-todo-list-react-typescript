import { TodoType } from "../../../App";
import { TodoAction } from "../../actions/todoAction/action.type";
import { ActionTypes } from "../../actions/todoAction/actionTypes";

export interface InitialState {
    todoList: TodoType['todo']
}

const initialState: InitialState = {
    todoList: [],
}

const reducer = (state: InitialState = initialState, action: TodoAction) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                todoList: [...state.todoList, {name: action.payload}]
            }
        case ActionTypes.DELETE_TODO:
            return {
                todoList: state.todoList.reduce((ack, item) => {
                    if(item.name === action.payload) {
                        return ack;
                    } else {
                        return [...ack, item]
                    }
                }, [] as TodoType["todo"])
            }
        default: 
            return state
    }
}

export default reducer;