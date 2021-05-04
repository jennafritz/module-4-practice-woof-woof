import React from 'react'

const DogSpan = ({pup, onSpanClick}) => {
    return(
        <span onClick={(event) => onSpanClick(event, pup)}>{pup.name}</span>
    )
}

export default DogSpan