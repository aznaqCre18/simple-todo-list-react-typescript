import { useDispatch, useSelector } from 'react-redux';
import InputField from './component/InputField';
import ListTodo from './component/ListTodo';
import { State } from './redux/reducers';
import "./style.scss";


export interface TodoType {
  todo: {
    name: string;
  }[]
}

export default function App() {
  const list = useSelector((todoList: State) => todoList.todo.todoList);

  return (
    <div className="container">
      <h3>SIMPLE TODO LIST</h3>
      <InputField 
        todoList={list} 
        // setTodoList={handleAddTodo} 
      />
      <ListTodo 
        todoList={list} 
        // setTodoList={setTodoList} 
      />
    </div>
  );
}
