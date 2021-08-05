interface Props {
    onClick: () => void,
}

const Button: React.FC<Props> = ({ onClick }) => {
    return (
      <button onClick={onClick}>Add</button>
    )
  }
  
  export default Button;