import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/Button/Button';
import SortButton from './components/Button/SortButton';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [list, setList] = useState([5, 3, 1, 10, 9])
  const [sortOrder, setSortOrder] = useState('Ascending')

  const sortArray = () => {
    const sortedList = [...list]
    if (sortOrder === 'Ascending') {
      sortedList.sort((a, b) => a - b)
      setList(sortedList)
      setSortOrder('Descending')
    }
    else {
      sortedList.sort((a, b) => b - a)
      setList(sortedList)
      setSortOrder('Ascending')
    }
    console.log(sortedList, sortOrder)
  }

  console.log(list, 'List array')

  const listItems = useMemo(() => [...list], [list]);
  console.log(listItems, 'listItems array')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);



  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <SortButton onSort={sortArray}>{sortOrder}</SortButton>
    </div>
  );
}

export default App;