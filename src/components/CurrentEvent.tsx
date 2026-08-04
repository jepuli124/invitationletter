import React from 'react'

interface incomingParams{}

const CurrentEvent: React.FC<incomingParams> = () => {
    return (
    <div style={{fontFamily: 'knive'}}>
        <h1>It seems that there isn't any events planned</h1>
        <h3>You may ask additional information from the Minced Meat Goblin</h3>
    </div>
    )
}

export default CurrentEvent