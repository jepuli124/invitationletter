import React from 'react'
import musicPlayer from '../../hooks/MusicHook'

interface incomingParams{}

const Clothing29082026: React.FC<incomingParams> = () => {
    return (
    <div onClick={() => {
        musicPlayer.playSFX("wide.mp3")
    }}>
        <h1 style={{justifySelf: "center"}}> 👔 Clothing code 👗 </h1>
        
        <p> There isn't a rule but as a suggestion wear autumn colors such as <a style={{color: "orange"}}>orange</a> and <a style={{color: "brown"}}>brown</a> </p>

        <p> We will be outside so it is recommended that something slightly warmer </p>
    </div>
    )
}

export default Clothing29082026