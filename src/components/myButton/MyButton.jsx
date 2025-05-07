import './MyButton.css'

function MyButton({text = 'Click me..', type = 'button'}) {
  return <button type={type} className="my-button">{text}</button>
}

export default MyButton;