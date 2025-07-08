
import { useState } from 'react';
import './App.css'

function App() {
  let [coin,setCoin] = useState(0);
  let [power,setPower] =useState(6500);
  let [earn,setEarn]=useState(1);
  let [level,setLevel]=useState(1);
  function handleClick(){
    if (power == 0) {
      return;
    }else {
      changeLevel();
      setCoin(coin + earn);
      setPower(power - earn);
    }
    
  }
  function changeLevel(){
    if(coin==20){
      setLevel(level+1);
      setEarn(earn+2);
    }else if(coin==60){
      setLevel(level+1);
      setEarn(earn+4);
    }
  }
  return (
    <div className='body'>
      <div className="box container">
        <h2>Hamster Kombat</h2>
        <div className="ota container">
          <div className="card">
          <p>Level</p>
          <div className="text">
            <img src="./g.png" alt="" /><h5>+{earn}</h5>
          </div>
          
          </div><div className="card">
            <p>Coins to level up</p>
            <div className="text">
               <h5>{level}</h5>
            </div>
          
         
          </div><div className="card">
          <p>Profit per hour</p>
          <div className="text">
            <img src="./g.png" alt="" /> <h5>+636</h5>
          </div>
          
          </div>
        </div>
        <div className="img">
          <img src="./g2.png" alt="" />
        <h1>{coin} </h1>
        </div>
        <div className="hamster">
          <button onClick={() => handleClick()}  ><img src="./i.png" alt="" /></button>
        </div>
        <div className="box2">
          <div className="p">
            <img src="./v.png" alt="" />
          <h3>{power} / 6500</h3>
          </div>
          
          <div className="text2">
            <h3>Boost</h3>
          </div>
        </div>
        <div className="ota2">
          <div className="card2">
            <img src="./u.png" alt="" />
            <p>Exchange</p>
          </div>
          <div className="card2">
            <img src="./u.png" alt="" />
            <p>Exchange</p>
          </div>
          <div className="card2">
            <img src="./u.png" alt="" />
            <p>Exchange</p>
          </div>
          <div className="card2">
            <img src="./u.png" alt="" />
            <p>Exchange</p>
          </div>
          <div className="card2">
            <img src="./u.png" alt="" />
            <p>Exchange</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
