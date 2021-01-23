import React from 'react';
import MainPage from "./components/MainPage";
import {ScreenVariantProvider} from "./components/plasmic/responsive_bb/PlasmicGlobalVariant__Screen";

function App() {
  return (
      <ScreenVariantProvider>
        <MainPage/>
      </ScreenVariantProvider>
  )
}

export default App;