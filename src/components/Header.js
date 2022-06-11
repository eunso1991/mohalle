import React, { useState } from "react";
import { render } from '@testing-library/react';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';


function Header(){

	let location = useLocation();
	let headerTitle = null;
	let headerClass = null;

	console.log(location)

	if(location.state === 'BOOK') {
		headerTitle = 'BOOK';
		headerClass = 'header book';          
        
    } else if (location.state === 'MOVIE') {
        headerTitle = 'MOVIE';
		headerClass = 'header movie';
        
    }else if (location.state === 'FOOD') {        
		headerTitle = 'FOOD';
		headerClass = 'header food';
       
    } else if (location.state === 'HIKING') {
        headerTitle = 'HIKING';
		headerClass = 'header hiking';       
    }

	else if (location.state === 'MYPAGE') {
        headerTitle = 'MYPAGE';
		headerClass = 'header mypage';       
    }

	return(

	  <header className={headerClass}>
		<div className="header_inner">
		  <div className="menu_box">			
			<Link className="homeBtn" title="HOME" to={{
              pathname:'/',
              state:'MAIN'
            }}><i className="xi-home"></i></Link>
		  </div>        
		  <h1 className="subLogo">
			Hallae <span>{headerTitle}</span>
		  </h1>
		  <Link className="view_Mypage" title="마이페이지" to={{
            pathname:'/mypage',
            state:'MYPAGE'
          }}><i className="xi-profile"></i></Link>
		</div>
	  </header>
	)

  }

export default Header