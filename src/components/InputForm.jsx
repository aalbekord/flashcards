import "./InputForm.css"
import {useState} from "react";

const InputForm = (props) => {
  const [guess, setGuess] = useState("")
  const [color, setColor] = useState("")

  const handleInputChange = (e) => {
    const value = e.target.value;
    setGuess(value);
  }

  const handleButtonClick = () => {
    if(guess.toLowerCase() === props.answer.toLowerCase()) {
      setColor("green")
    }
    else {
      setColor("red")
    }
    setGuess("")
  }
  
  return (
    <>
      <form>
        <p>
          <span>Guess the answer here: </span>
        </p>
        <input onChange={handleInputChange} className={color} type="text" value={guess} />
        <button onClick={handleButtonClick} type="button">Submit Guess</button>
      </form>
    </>
  )
};

export default InputForm;