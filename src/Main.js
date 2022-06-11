import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import logo from './img/logo.png';

function Main (props) {
    return(
        <Route path="/"> 
            <main className="main">
                <h1 className="logo"><a href="#"><img src={logo} className="logo_mohallae" alt="Mohallae" /></a></h1>
                <nav>
                    <ul className="gnb clearfix">                   
                        <li>
                            <div className="gnb_inner">
                                <div className="title_wrap">
                                    <h2>{ props.gnbTitle[0] }<span>{ props.gnbTitle_Kr[0] }</span></h2>
                                    <Link className="viewBtn" to="/book">VIEW</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gnb_inner">
                            <div className="title_wrap">
                                    <h2>{ props.gnbTitle[1] }<span>{ props.gnbTitle_Kr[1] }</span></h2>
                                    <Link className="viewBtn" to="/movie">VIEW</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gnb_inner">
                                <div className="title_wrap">
                                    <h2>{ props.gnbTitle[2] }<span>{ props.gnbTitle_Kr[2] }</span></h2>
                                    <Link className="viewBtn" to="/food">VIEW</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gnb_inner">
                                <div className="title_wrap">
                                    <h2>{ props.gnbTitle[3] }<span>{ props.gnbTitle_Kr[3] }</span></h2>
                                    <Link className="viewBtn" to="/hiking">VIEW</Link>
                                </div>
                            </div>
                        </li>             
                    </ul>
                </nav>  
        </main>
        </Route> 
    )
}

export default Main;

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