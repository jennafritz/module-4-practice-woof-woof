import React from 'react'
import DogSpan from './DogSpan'

const DogBar = ({pups, onSpanClick}) => {
    return(
        <div id='dog-bar'>
            {pups.map(pup => <DogSpan pup={pup} key={pup.id} onSpanClick={onSpanClick}/>)}
        </div>
    )
}

export default DogBar