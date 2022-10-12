import { useState } from 'react'

const Statisticline =(props) => {
  const text =props.text
  const value = props.value
  if (text ==="good"){
    return (
      <tbody>
      <tr>
       <td>good</td> 
       <td> {value}</td>
      </tr> 
      </tbody>
    )
  }
  if (text ==="neutral"){
      return (
        <tbody>
          <tr>
            <td>neutral</td>
            <td> {value}</td> 
          </tr>
        </tbody>
      )
  }
  if (text ==="bad"){
        return (
          <tbody>
            <tr>
              <td>bad</td>
              <td> {value}</td>
            </tr>
          </tbody>         
        )
        }
  if (text ==="all"){
          return (
            <tbody>
              <tr>
                <td>all</td>
                <td> {value}</td>
              </tr>
            </tbody>            
          )
          }
  if (text ==="average"){
    return (
      <tbody>
        <tr>
          <td>average</td>
          <td>{value.toFixed(2)}</td>
        </tr>
      </tbody>      
    )
    }
  if (text ==="positive"){
      return (
        <tbody>
          <tr>
            <td>positive</td>
            <td>{value.toFixed(2)} %</td>
          </tr> 
        </tbody>      
      )
      }
        

  }
  
  
  

  
  



const Statistics = (props) => {
  const posi = props.posi
  const nega = props.nega
  const neutr = props.neutr
  if (props.posi === 0 && props.nega === 0 && props.neutr === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <Statisticline text="good" value={posi}/>
      <Statisticline text="neutral" value={neutr}/>
      <Statisticline text="bad" value={nega}/>
      <Statisticline text="all" value= {nega+posi+neutr}/>
      <Statisticline text="average" value= {(posi-nega)/(nega+posi+neutr)}/>
      <Statisticline text="positive" value= {(posi/(nega+posi+neutr))*100} />
    </table>
  )
  
   

  

}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
   <div>
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1 )}>
    good
    </button>
    <button onClick={() => setNeutral(neutral+ 1 )}> 
    neutral
    </button>
    <button onClick={() => setBad(bad + 1 )}> 
    bad
    </button>
    <h1>statistics</h1>
    <Statisticline pos = {good} neg={bad} neut = {neutral} />
    <Statistics posi = {good} nega={bad} neutr = {neutral} />
   </div>
  )
}

export default App