import * as React from "react";
import MainPage from "./MainPage";
import algoliasearch from 'algoliasearch';
import {InstantSearch} from 'react-instantsearch-dom';
import HeaderRowComp from "./HeaderRowComp"
import HeaderClickableText from './HeaderClickableText'
import {Link} from "react-router-dom"
import RoutesDialog from "./RoutesDialog"
import CustomSearchBox from './CustomSearchBox';

const searchClient = algoliasearch(
    'E5ACT1VI4D',
    '58c5723bb97942db9b754bf244b1da75'
  );

function FullMainPage() {
    const [isRouteDialogShowed, updateRouteDialog] = React.useState(false)
    const [defaultSearch, setDefaultSearch] = React.useState("")
    const node = React.useRef<any>();
    console.log(isRouteDialogShowed)
    return <div style={{width:"100%"}}><InstantSearch searchClient={searchClient} indexName="dev_manu">
        <div style={{width: "100%", position: "fixed", top: "0px", zIndex: 1}}>
        <HeaderRowComp menuButtonRef={node}
              expand={()=>{updateRouteDialog(!isRouteDialogShowed)}} 
              headerSearchBox={<CustomSearchBox defaultSearch={defaultSearch}/>}
              subscribeButton={<Link to="/subscribe"><HeaderClickableText text={"Suscríbete"} isBold={true}/></Link>}
              aboutusButton={<HeaderClickableText text={"Sobre nosotros"} isBold={false}/>}
              faqButton={<HeaderClickableText text={"FAQ"} isBold={false}/>}
              contactButton={<HeaderClickableText text={"Contacto"} isBold={false}/>}
              />
      </div>
      <div style={{position: "absolute",top: "100px",right: "230px",zIndex: 2}}>
        <div style={{position: "fixed",top: "100px",zIndex: 2}}>
            {isRouteDialogShowed?<RoutesDialog menuButtonRef={node} changeVisible={()=>updateRouteDialog(!isRouteDialogShowed)}/>:null}
        </div>
        </div>
        <MainPage searchMethod={(searchTerm: string)=>setDefaultSearch(searchTerm)} searchTerm={defaultSearch}/>
        </InstantSearch></div>
}

export default FullMainPage;