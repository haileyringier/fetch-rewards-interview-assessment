import React, { useEffect, useState } from 'react';
import './App.css';

// const dataUrl = 'https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json';
const dataUrl = 'http://localhost:3000/data'

export default function App() {

    const [list, setList] = useState([])

    useEffect(() => {
      fetch(dataUrl)
        .then(response => response.json())
        .then(response => console.log(response))
        
    }, [])

  const filterNames = (thingy) => {
      const filteredList = thingy.filter(item => item.name !== "")
      console.log(filteredList)
      setList(filteredList)
  }

  return (
    <div className="App">
      <h1>Fetch Rewards Interview Assessment</h1>
      <p>Data is sorted by ListId and whether it contains a name.</p>
      
    </div>
  );
}


