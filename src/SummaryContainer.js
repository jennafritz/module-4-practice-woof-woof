import React from 'react'
import DogInfo from './DogInfo'

const SummaryContainer = ({displayPup, goodBadClick}) => {
    return(
        <div id='dog-summary-container'>
            <h1>DOGGO:</h1>
            <DogInfo displayPup={displayPup} goodBadClick={goodBadClick}/>
        </div>
    )
}

export default SummaryContainer