import { useState } from 'react'







const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const points = { 0: 0, 1:0, 2: 0, 3: 0 ,4:0, 5:0,6:0}
  let copy = { ...points }
 

  const handleVoteClick = () => {
    copy[selected] += vote     
    setVote(vote + 1)
    console.log('vote',vote)
    console.log('taulukko',copy)
    console.log('selected',selected)
    return (
      copy
    )
  }

  const handleNextClick = () => {
    setVote(0)
    setSelected(Math.floor(Math.random() * 6))
    
  }
 
  

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      {copy[selected]}
      <button onClick={handleVoteClick}>
      vote
      </button>
      <button onClick={handleNextClick}>
      next anecdote
      </button>
    </div>
  )
}

export default App