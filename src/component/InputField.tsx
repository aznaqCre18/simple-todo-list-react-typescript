import Button from '../atoms/Button';
import { TodoType } from '../App';
import { useState } from 'react';

interface Props {
  todoList: TodoType["todo"],
  setTodoList: React.Dispatch<React.SetStateAction<TodoType["todo"]>>
}

interface Input {
  name: string,
}

const InputField: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [input, setInput] = useState<Input>({
    name: "",
  })

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, 
    })
  }

  const _handleAddTodo = (): void => {
    if(!input.name) {
      return
    }

    setTodoList([
      ...todoList,
      { name: input.name }
    ])

    setInput({
      name: "",
    })
  }

  const _handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) {
      e.preventDefault();
      console.log("AZIZ")
      _handleAddTodo();
      return false;
    } 
  }

  return (
    <div className="input-wrapper">
      <div className="input-field">
        <input 
          type="text" 
          placeholder="write your todo here..." 
          value={input.name}
          name="name"
          onChange={_handleChange}
          onKeyUp={_handleEnter}
          autoFocus={true}
          autoComplete="off"
        />
        <Button onClick={_handleAddTodo} />
      </div>
    </div>
  )
}

export default InputField;