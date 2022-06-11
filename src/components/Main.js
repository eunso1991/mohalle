import logo from '../img/logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

function Main(props) {
  
  let location = useLocation();

  if(location.pathname === '/'){
    location.state = 'MAIN';
  }
  
	return (
    <Route exact path="/">    
      <main className="main">
        <h1 className="logo"><a href="#"><img src={logo} className="logo_mohallae" alt="Mohallae" /></a></h1>
          <nav>
            <ul className="gnb clearfix">
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
                  </div>
                </li> 
                )
              })
              }                   
            </ul>
          </nav>  
      </main>
    </Route>
	)
}

export default Main