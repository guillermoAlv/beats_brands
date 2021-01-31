import React from 'react';
import MainPage from "./components/MainPage";
import SubscribePage from "./components/SubscribePage";
import {ScreenVariantProvider} from "./components/plasmic/responsive_bb/PlasmicGlobalVariant__Screen";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    
      <ScreenVariantProvider>
        <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={MainPage}></Route>
        <Route exact path={"/subscribe"} component={SubscribePage}></Route>
        </Switch>
        </BrowserRouter>
      </ScreenVariantProvider>
      
      
  )
}

export default App;