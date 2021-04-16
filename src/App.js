import React, { useState, useEffect } from 'react'
import Coin from './Coin';
import './App.css'

const App=() => {

  const [data, setData]=useState([]);
  const [input, setInput]=useState("");
  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    fetch(url).then((response) => response.json()).then(data => { setData(data) })
  }, [])

  const filtered=data.filter((coin) => coin.name.toLowerCase().includes(input.toLowerCase()))


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Cryptocurrency Prices</h1>
        <br />
        <form >
          <input className="coin-input" type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}></input>
        </form>
      </div>
      {filtered.map((coin) => {
        return (
          <Coin key={coin.id} {...coin} />
        );
      })}





    </div>

  )
}

export default App
