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
      setStreak(streak + 1)
    }
    else {
      setColor("red")
      setStreak(0)
    }
    if(streak > highestStreak)
      setHighestStreak(streak)
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
      <div>Current Streak: {streak}</div>
      <div>Highest Streak: {highestStreak}</div>
    </>
  )
};

export default InputForm;