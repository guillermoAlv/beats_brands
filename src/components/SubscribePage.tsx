// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicSubscribePage,
  DefaultSubscribePageProps
} from "./plasmic/responsive_bb/PlasmicSubscribePage";
import HeaderRowComp from "./HeaderRowComp"
import {SearchBox} from 'react-instantsearch-dom';
import {Link} from "react-router-dom"
import HeaderClickableText from './HeaderClickableText'
import algoliasearch from 'algoliasearch';
import {
  InstantSearch
} from 'react-instantsearch-dom';
import RoutesDialog from "./RoutesDialog"
const searchClient = algoliasearch(
  'E5ACT1VI4D',
  '58c5723bb97942db9b754bf244b1da75'
);
// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface SubscribePageProps extends Omit<DefaultSubscribePageProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultSubscribePageProps altogether and have
// total control over the props for your component.
interface SubscribePageProps extends DefaultSubscribePageProps {}

function SubscribePage(props: SubscribePageProps) {
  const [isRouteDialogShowed, updateRouteDialog] = React.useState(false)
  const node = React.useRef<any>();
  console.log(isRouteDialogShowed)
  const searchBox = <SearchBox submit={<div/>} reset={<div/>} translations={{placeholder: 'Prendas, estilo, mujer, hombre ...'}}/>
  return <InstantSearch searchClient={searchClient} indexName="dev_manu">
  <PlasmicSubscribePage 
    routesDi={isRouteDialogShowed ? <RoutesDialog changeVisible={()=>updateRouteDialog(!isRouteDialogShowed) } menuButtonRef={node} /> : null} 
    headerRowA={<HeaderRowComp menuButtonRef={node}
      expand={()=>updateRouteDialog(!isRouteDialogShowed)}
      headerSearchBox={<Link to="/" style={{ width: '100%' }}>{searchBox}</Link>}
      subscribeButton={<Link to="/subscribe"><HeaderClickableText text={"Suscríbete"} isBold={true}/></Link>}
      aboutusButton={<HeaderClickableText text={"Sobre nosotros"} isBold={false}/>}
      faqButton={<HeaderClickableText text={"FAQ"} isBold={false}/>}
      contactButton={<HeaderClickableText text={"Contacto"} isBold={false}/>}
    />}
    {...props} /></InstantSearch>;
}

export default SubscribePage;
