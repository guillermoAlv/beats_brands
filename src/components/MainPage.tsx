// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMainPage,
  DefaultMainPageProps
} from "./plasmic/responsive_bb/PlasmicMainPage";
import SearchCard from "./SearchCard"
//import BrandCard from "./BrandCard"
import StoreCard from "./StoreCard"
import CustomSearchBox from './CustomSearchBox';
import {
  connectStateResults,
  Hits
} from 'react-instantsearch-dom';
// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface MainPageProps extends Omit<DefaultMainPageProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultMainPageProps altogether and have
// total control over the props for your component.
function Tags({tag, ...props}: any){
  return (<div style={{margin:'10px 10px 10px 0px', backgroundColor:'#EEEEEE', padding:'3px'}}>{tag}</div>)
}


function Hit(props: any) {
  //var cat = ""
  var listItems: any = null
  if (Array.isArray(props.hit["tags"])){
    if(props.hit["tags"].length > 3){
      props.hit["tags"] = props.hit["tags"].slice(0,3)
      props.hit["tags"].push("mas...")
    }
    else{
    listItems = props.hit["tags"].map((tag_text: string) =><li>{<Tags tag={tag_text}/>}</li>);
    }
  }else{
    //cat = props.hit["tags"]
  }
  return <a href={props.hit["url"]} target="_blank" rel="noreferrer">
    <StoreCard 
      brandName={<span className="brand_name" >{props.hit["name"]}</span>}
      storeCardImageCont={<img className="image_brand" alt="" role="img" src={props.hit['url_site_image']}></img>}
      tags={<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {listItems}</div>}/>
    </a>
}

function connectedResult(te: (searchTerm: string)=>void, {searchState, searchResults, children}: any){
  function getRandom(arr:any, n:any) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  
  if(searchResults===null || searchResults["query"]===""){
    return (<SearchCard searchTerm={"Zapatos"} onClick={te}/>)
  }else{
    if(searchResults['hits'].length > 6){
      var resultArr = getRandom(searchResults['hits'],6)
      searchResults['hits'] = resultArr;
    }
    return (<div className={'myclase'}><Hits hitComponent={Hit} /></div>)
  }
}

interface MainPageProps extends DefaultMainPageProps {
  searchMethod:(searchTerm: string)=>void,
  searchTerm:string
}

function MainPage({searchMethod,searchTerm, ...props}: MainPageProps) {
  const  Results = connectStateResults(({ searchState, searchResults, children}) => {return connectedResult(searchMethod, {searchState, searchResults, children})});
  return (
        <PlasmicMainPage
          storesResults={<Results/>}
          heroRowSearchbox={<CustomSearchBox defaultSearch={searchTerm}/>}
          //searchSlider={<ScrollBox></ScrollBox>}
          {...props} />);
}

export default MainPage;