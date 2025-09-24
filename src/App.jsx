import './App.css'
import Card from "./components/Card"
import cardsInfo from "./data/cards"
import { useState } from 'react'
function App() {
  const [cards, setCards] = useState(cardsInfo)
  const [index, setIndex] = useState(0)
  console.log(cards)
  
  function handleBackClick() {
    if(index > 0)
      setIndex(index - 1)
  }
  
  function handleForwardClick() {
    if(index < cards.length - 1)
      setIndex(index + 1)
  }

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
      <Card front={cards[index].front} back={cards[index].back} difficulty={cards[index].difficulty}/>
      <div className="arrow-buttons">
        <button className="arrow" onClick={handleBackClick}>
            <span>←</span>
        </button>
        <button className="arrow" onClick={handleForwardClick}>
          <span>→</span>
        </button>
      </div>
      <button className="random-button" onClick={() => shuffle(cards)}>Randomize</button>
    </>
  )
}

export default App
