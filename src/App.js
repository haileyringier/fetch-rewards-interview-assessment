import React, { useEffect, useState } from 'react';
import './App.css';
import ListSection from './ListSection';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'

const dataUrl = 'http://localhost:3000/data';

export default function App() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
      fetch(dataUrl)
        .then(response => response.json())
        .then(response => setDataList(response.listSortedbyNameAndListId))
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="heading-section">
          <img className='fetch-logo' src='https://www.fetchrewards.com/assets/FetchRewardsHorizontalLogo.png'></img>
          <h1>Interview Assessment</h1>
          <p>Data is grouped by the "listId" property and then is sorted by the "name" property.</p>
          <ListSection list={dataList}/>
        </div>
      </div>
    </ThemeProvider>
  );
};



