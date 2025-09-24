import './App.css'
import Card from "./components/Card"
import cardsInfo from "./data/cards"
import { useState } from 'react'
function App() {
  const [cards, setCards] = useState(cardsInfo)
  const [index, setIndex] = useState(0)
  console.log(cards)

  const currentCard = cards[index]
  
  return (
    <>
      <h1 className="title">CS Trivia</h1>
      <p>Here is a {cards.length} card set of flashcards to learn some fun facts about Computer Science!</p>
      <Card front={currentCard.front} back={currentCard.back} difficulty={currentCard.difficulty}/>
    </>
  )
}

export default App
