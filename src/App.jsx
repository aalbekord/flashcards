import './App.css'
import Card from "./components/Card"
import cardsInfo from "./data/cards"
import { useState } from 'react'
function App() {
  const [cards, setCards] = useState(cardsInfo)
  const [index, setIndex] = useState(0)
  console.log(cards)

  const currentCard = cards[index]
  function handleBackClick() {
    setIndex(index - 1)
  }
  function handleForwardClick() {
    setIndex(index + 1)
  }
  return (
    <>
      <h1 className="title">CS Brain Teaser</h1>
      <p>Here is a set of {cards.length} flashcards to learn some fun and important concepts about Computer Science!</p>
      <Card front={currentCard.front} back={currentCard.back} difficulty={currentCard.difficulty}/>
      <div className="arrow-buttons">
      {index > 0 && 
        <button className="arrow" onClick={handleBackClick}>
            <span>←</span>
        </button>
      }
      {index < cards.length - 1 && 
        <button className="arrow" onClick={handleForwardClick}>
          <span>→</span>
        </button>
      }
      </div>
      <button className="random-button">Randomize</button>
    </>
  )
}

export default App
