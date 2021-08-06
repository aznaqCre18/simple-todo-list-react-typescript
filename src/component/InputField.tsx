import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TodoType } from '../App';
import Button from '../atoms/Button';
import TodoAction from '../redux/actions';

//type props
interface Props {
  todoList: TodoType["todo"],
  setTodoList?: React.Dispatch<React.SetStateAction<TodoType["todo"]>>
}

// type input
interface Input {
  name: string,
}

const InputField: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [input, setInput] = useState<Input>({
    name: "",
  })

  const dispatch = useDispatch();
  const { handleAddTodo } = bindActionCreators(TodoAction, dispatch);

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

    handleAddTodo(input.name)

    setInput({
      name: "",
    })
  }

  const _handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) {
      e.preventDefault();
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
        <Button 
          onClick={_handleAddTodo}
        />
      </div>
    </div>
  )
}

export default InputField;