
import CssExample from "./components/CssExample";
import CssExample2 from "./components/CssExample2";
import Ex3 from "./components/Ex3";
import GridTile from "./components/GridTile";
import Map from './components/Map'
import LottieTest from './components/LottieTest'
import animationData from './components/ok.json'
import TabExample from './components/TabExample'
import InputComponent from './components/InputComponents'


import React, { useState } from 'react'
import Products from "./components/Products";

const list = [
  { name: 'item1', id: 1 },
  { name: 'item1', id: 2 },
  { name: 'item3', id: 3 },
  { name: 'item4', id: 4 },
  { name: 'item5', id: 5 },
  { name: 'item6', id: 6 },
  { name: 'item7', id: 7 },
  { name: 'item8', id: 8 },
  { name: 'item9', id: 9 },
  { name: 'item10', id: 10 },
  { name: 'item11', id: 11 },
  { name: 'item12', id: 12 },
  { name: 'item13', id: 13 },
  { name: 'item14', id: 14 },
  { name: 'item15', id: 15 },
  { name: 'item16', id: 16 },
  { name: 'item17', id: 17 },
  { name: 'item18', id: 18 },
  { name: 'item19', id: 19 }
];

function App() {

  const [tab, setTab] = useState(list[0].id)

  const handleTabChange = key => {
    setTab(key)
  }

  return (
    <>
      {tab}
      <TabExample onTabChange={handleTabChange} categories={list} />
      {/* <InputComponent /> */}
      <Products category={tab} />
      {/* <GridTile /> */}
      {/* <CssExample2 /> */}
      {/* <Ex3 /> */}
      {/* <Map /> */}
      {/* <LottieTest animationData={animationData} /> */}
    </>
  );
}

export default App;
