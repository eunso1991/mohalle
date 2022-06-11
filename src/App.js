import React, { useState } from "react";
import './reset.css';
import './App.css';
import SkipNav from './components/SkipNav';
import Main from './components/Main';
import Sub from './components/Sub';


function App() {
  let [page, page_Change] = useState(['MAIN', 'BOOK', 'MOVIE', 'FOOD', 'HIKING', 'MYPAGE']);
  let [gnbTitle, gnbTitle_Change] = useState(['BOOK', 'MOVIE', 'FOOD', 'HIKING'])
  let [gnbTitle_Kr, gnbTitle_Kr_Change] = useState(['책 볼래?', '영화 볼래?', '맛집 할래?', '등산 할래?'])
  let [link_Address, link_Change] = useState (['/book', '/movie', '/food', '/hiking'])

  return (
    <div className="wrapper">
      <SkipNav />
      <Main gnbTitle={gnbTitle} gnbTitle_Kr={gnbTitle_Kr} link_Address={link_Address} />
      <Sub page={page} />     
    </div>
  );
}

export default App;
