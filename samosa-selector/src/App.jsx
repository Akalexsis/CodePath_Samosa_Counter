import { useState } from 'react'
import samosa from "./assets/samosa.jpg"
import "./App.css"


function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count+multiplier)

    // buyEvent changes the count value per click
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
    }
  } 
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
    }
  } 
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
    }
  } 

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Counter: {count}</h2>
      <img className='samosa' src={samosa} alt="samosa" onClick={updateCount}/>

      {/* upgrades for the UI */}
      <div className="container">
        <div className="upgrade">
          <h2>Double stuffed</h2>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosa</button>
        </div>
        <div className="upgrade">
          <h2>Party Pack</h2>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosa</button>
        </div>
        <div className="upgrade">
          <h2>Full Feast</h2>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosa</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
