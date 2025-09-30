

const InputForm = (props) => {
  const handleClick = () => {
    if(response == props.answer) {
      
    }
  }
  return (
    <>
      <form>
        <p>
          <span>Guess the answer here: </span>
        </p>
        <input type="text" />
        <button onClick={handleClick} type="submit">Submit Guess</button>
      </form>
    </>
  )
};

export default InputForm;