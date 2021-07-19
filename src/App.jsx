/* import React, { useState } from 'react';
import lists from './List';
import {pgname} from './List';


const name="Asit";

const currdate=new Date().toLocaleDateString();

const img1="https://picsum.photos/200/300";
const styling={
  color: `pink` ,
  textAlign : "center" 
}
const currtime=new Date().toLocaleTimeString();
const App = () => {
    const state = useState();
    const [count, setCount] = useState(currtime);
    const IncNum = () => {
        const currtime=new Date().toLocaleTimeString();
        setCount(currtime);
    };

    setInterval(IncNum,1);
    
return (
    <> 
  <div className="cssstyle"> 
  <h1 style={styling}>i am asit</h1>
  <h2>asit bansal</h2>
  <h1> { `my name is ${name} ${name}`}</h1>
  <h2>{pgname}</h2>
  <h2>{`today's date is ${currdate} and time is ${currtime}`}</h2>
  <h2> abcdefghij </h2> 
  <h2> {lists()} </h2>
  <img src={img1} alt="randomclicks" />
  <h1>{count}</h1>
  </div>
  </>
)
}
export default App; */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Watchlist from './Watchlist.jsx';
import { Watched } from './Watched.jsx';
import Add from './Add.jsx';
import "./index.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from './GlobalState.jsx';

function App(){
  return (
    <GlobalProvider>
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
      </Switch>
    </Router>
  </GlobalProvider>
  )
}

export default App;