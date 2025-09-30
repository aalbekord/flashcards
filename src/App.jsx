import './App.css'
import Card from "./components/Card"
import cardsInfo from "./data/cards"
import { useState } from 'react'
import { useOnKeyPress } from "./hooks/useOnKeyPress";
import InputForm from "./components/InputForm"
function App() {
  const [cards, setCards] = useState(cardsInfo)
  const [index, setIndex] = useState(0)
  console.log(cards)
  
  const handleBackClick = () => {
    if(index > 0)
      setIndex(index - 1)
  }
  
  const handleForwardClick = () => {
    if(index < cards.length - 1)
      setIndex(index + 1)
  }
  const handleRestartClick = () => {
    setIndex(0);
  }
  const handleResetClick = () => {
    setCards(cardsInfo)
  }
  const handleRemoveCard =() => {
    const array = [...cards]
    array.splice(index, 1);
    setCards(array)
    console.log(cards)
  }
  
  console.log(cardsInfo);

  useOnKeyPress(handleBackClick, "ArrowLeft");
  useOnKeyPress(handleForwardClick, "ArrowRight");
  
  const shuffle = (array) => {
    const shuffled = [...array];
    for (var i = array.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
  }

  return (
    <>
      <h1 className="title">CS Brain Teaser</h1>
      <p>Here is a set of {cards.length} flashcards to learn some fun and important concepts about Computer Science!</p>
      { cards.length > 0 && ( <>
        <Card front={cards[index].front} back={cards[index].back} difficulty={cards[index].difficulty}/>
        <div className="arrow-buttons">
          <button className="button" onClick={handleRemoveCard}>
            <span>mark</span>
          </button>
          <button className="arrow" onClick={handleBackClick}>
              <span>←</span>
          </button>
          <button className="arrow" onClick={handleForwardClick}>
            <span>→</span>
          </button>
          {index === cards.length - 1 && (
            <button className="arrow" onClick={handleRestartClick}>
              <span>↻</span>
            </button>
          )}
          <button className="random-button" onClick={() => shuffle(cards)}>
            <span>Randomize</span>
          </button>
        </div>
        <InputForm answer={cards[index].back}/>
      </>
    )}
    {cards.length === 0 && (
      <button className="arrow" onClick={handleResetClick}>
        <span>↻</span>
      </button>
    )}
    </>
  )
}

export default App
