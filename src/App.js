import React from 'react';
import FullMainPage from "./components/FullMainPage";
import SubscribePage from "./components/SubscribePage";
import {ScreenVariantProvider} from "./components/plasmic/responsive_bb/PlasmicGlobalVariant__Screen";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { StickyContainer, Sticky } from 'react-sticky';

function App() {
  return (
      <ScreenVariantProvider>
        <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={FullMainPage}></Route>
        <Route exact path={"/subscribe"} component={SubscribePage}></Route>
        </Switch>
        </BrowserRouter>
      </ScreenVariantProvider>
  )
}

export default App;