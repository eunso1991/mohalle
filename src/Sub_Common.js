import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Sub_Common (props) {
    return(
        <div>

<Header></Header>
      <subMain01></subMain01>

        </div>
       
    )
}

function Header(props){

    var header_class = null;
  
    if(props.mode === 'BOOK') {
      header_class = 'header book';
    } else if (props.mode === 'MOVIE') {
      header_class = 'header movie';
    }else if (props.mode === 'FOOD') {
      header_class = 'header food';
    } else if (props.mode === 'HIKING') {
      header_class = 'header hiking';
    } else if (props.mode === 'MYPAGE') {
      header_class = 'header mypage';
    }
  
    return(
      <header className={header_class}>
        <div className="header_inner">
          <div className="menu_box">
            <a href="#" className="menuBtn" title="메뉴 열기/닫기"><i className="xi-full-moon"></i></a>
            <Link className="homeBtn" title="HOME" to={{
              pathname:'/',
              state:'MAIN'
            }}><i className="xi-home"></i></Link>
          </div>        
          <h1 className="subLogo">
            Hallae <span>{props.mode}</span>
          </h1>
          <Link className="view_Mypage" title="마이페이지" to={{
            pathname:'/mypage',
            state:'MYPAGE'
          }}><i className="xi-profile"></i></Link>
        </div>
      </header>
    )
}

function subMain01(props) {
    <main className="sub book">
        <section className="sub_visual">            
        </section>
    </main>
}

export default Sub_Common;



/* <ul className="gnb clearfix">
{
props.gnbTitle.map(function(title, i){
    return (
    <li key={i}>
        <div className="gnb_inner">
        <div className="title_wrap">
            <h2>{ title }<span>{ props.gnbTitle_Kr[i] }</span></h2>
            <Link className="viewBtn" to={{
            pathname:props.link_Address[i],
            state:props.gnbTitle[i]
            }}>VIEW</Link>
        </div>
        </div
    </li> 
    )
})
}                   
</ul> */