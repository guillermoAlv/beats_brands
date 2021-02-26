import React from 'react';
import FullMainPage from "./components/FullMainPage";
import SubscribePage from "./components/SubscribePage";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
        <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={FullMainPage}></Route>
        <Route exact path={"/subscribe"} component={SubscribePage}></Route>
        </Switch>
        </BrowserRouter>
  )
}

export default App;