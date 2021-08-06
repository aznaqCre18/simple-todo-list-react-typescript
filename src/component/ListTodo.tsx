import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cross from './../static/icon/cross.svg';
import {TodoType} from './../App';
import TodoAction from '../redux/actions';

interface Props {
  todoList: TodoType["todo"],
  setTodoList?: React.Dispatch<React.SetStateAction<TodoType["todo"]>>
}

const ListTodo: React.FC<Props>  = ({ todoList, setTodoList }) => {

  const dispatch = useDispatch();
  const { handleDeleteTodo } = bindActionCreators(TodoAction, dispatch);

  const _handleRemove = (name: string) => {
    // setTodoList(prevState =>
    //   prevState.reduce((ack, item) => {
    //     if(item.name === name) {
    //       return ack;
    //     } else {
    //       return [...ack, item]
    //     }
    //   }, [] as TodoType["todo"])
    // );
    handleDeleteTodo(name);
  }

  const _renderTodo = (): JSX.Element[] | JSX.Element => {
    console.log(todoList, "<<")
    return (
      <React.Fragment>
        {
          todoList.length === 0 ? (
            <p>nothing todo for now</p>
          ) : (
            todoList.map((item, idx) => {
              return (
                <li className="todo" key={idx}>
                  <p className="todo-title">{item.name}</p>
                  <img 
                    className="cross" 
                    src={Cross} 
                    width="16" 
                    alt="cross" 
                    onClick={() => _handleRemove(item.name)} 
                  />
                </li>
              )
            })
          )
        }
      </React.Fragment>
    )
  }

  return (
    <div className="list-wrapper">
      <ul>
        {_renderTodo()}
      </ul>
    </div>
  );
}

export default ListTodo;