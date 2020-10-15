import React,{ useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch]= useStateValue();

  useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        //User is loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is loged out
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);
  console.log(user)


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
