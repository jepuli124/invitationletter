import React, { type ReactNode } from 'react'

interface incomingParams{
    children?: ReactNode
}

const CurrentEvent: React.FC<incomingParams> = ({children}) => {
    return (
    <div style={{minHeight: "100vh", justifyContent:"center", alignContent: "center"}}>
        {children? 
            <>
                {children}
            </>
            :   
            <div style={{fontFamily: 'knive'}}>
                <h1>It seems that there isn't any events planned</h1>
                <h3>You may ask additional information from the Minced Meat Goblin</h3>
            </div> 
        }
        
    </div>
    
    )
}

export default CurrentEvent