import { useState } from 'react';

import InputField from './component/InputField';
import ListTodo from './component/ListTodo';
import "./style.scss";

export interface TodoType {
  todo: {
    name: string;
  }[]
}

export default function App() {
  const [todoList, setTodoList] = useState<TodoType["todo"]>([]);

  return (
    <div className="container">
      <h3>SIMPLE TODO LIST</h3>
      <InputField todoList={todoList} setTodoList={setTodoList} />
      <ListTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
