import {SearchBox} from 'react-instantsearch-dom'

interface CustomSearchBoxProps{
    defaultSearch: string
}

function CustomSearchBox({defaultSearch, ...props}: CustomSearchBoxProps) {
    return <SearchBox submit={<div style={{display:"none" }}></div>} reset={<div/>} defaultRefinement={defaultSearch} translations={{placeholder: 'Prendas, estilo, mujer, hombre ...'}}/>
}

export default CustomSearchBox;