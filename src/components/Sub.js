import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sub_Layout from './Sub_Layout';

function Sub(props) {

 let location = useLocation();
 let [header, header_change] = useState(false);
 let [footer, footer_change] = useState(false);

 if(location.pathname === '/'){
  header = false;
  footer = false;
 } else {
  header = true;
  footer = true;
 }

	return (
    <>
    {
       header === true
         ? <Header></Header>
        : null
    }   

    <Switch>   
      
      <Route path="/book">         
        <Sub_Layout page={props.page[1]}></Sub_Layout>
      </Route>

      <Route path="/movie" >          
        <Sub_Layout page={props.page[2]}></Sub_Layout>
      </Route>

      <Route path="/food">          
        <Sub_Layout page={props.page[3]}></Sub_Layout>
      </Route>

      <Route path="/hiking">         
        <Sub_Layout page={props.page[4]}></Sub_Layout> 
      </Route>

      <Route path="/mypage">         
        <Sub_Layout page={props.page[5]}></Sub_Layout> 
      </Route>        
    </Switch>

    {
        footer === true
        ? <Footer /> 
        : null
    }
     
    </>
	)
}

export default Sub