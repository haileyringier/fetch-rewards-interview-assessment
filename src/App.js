import React, { useEffect, useState } from 'react';
import './App.css';
import ListSection from './ListSection';

// const dataUrl = 'https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json';
const dataUrl = 'http://localhost:3000/data'

export default function App() {

    const [dataList, setDataList] = useState([])

    useEffect(() => {
      fetch(dataUrl)
        .then(response => response.json())
        .then(response => setDataList(response.listSortedbyNameAndListId))
    }, [])
  return (
    <div className="App">
      <h1>Fetch Rewards Interview Assessment</h1>
      <p>Data is sorted by ListId and whether it contains a name.</p>
      <ListSection list={dataList}/>
    </div>
  );
}



