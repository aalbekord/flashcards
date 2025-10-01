import "./InputForm.css"
import {useState} from "react";

const InputForm = (props) => {
  const [guess, setGuess] = useState("")
  const [color, setColor] = useState("")
  const [streak, setStreak] = useState(0)
  const [highestStreak, setHighestStreak] = useState(0)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setGuess(value);
  }

  const handleButtonClick = () => {
    if(guess.toLowerCase() === props.answer.toLowerCase()) {
      setColor("green")
      // in order to dynamically use the new value, a new const must be made
      const newStreak = streak + 1
      setStreak(newStreak)
      if(newStreak >= highestStreak)
        setHighestStreak(newStreak) 
    }
    else {
      setColor("red")
      setStreak(0)
    }
    setGuess("")
  }
  
const handleFormSubmit = (e) => {
  e.preventDefault()
  handleButtonClick()
}

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <p>
          <span>Guess the answer here: </span>
        </p>
        <input
          onChange={handleInputChange}
          className={color}
          type="text"
          value={guess}
        />
        <button onClick={handleButtonClick} type="button">
          Submit Guess
        </button>
      </form>
      <div id="current-streak">Current Streak: {streak}</div>
      <div id="highest-streak">Highest Streak: {highestStreak}</div>
    </>
  )
};

export default InputForm;

