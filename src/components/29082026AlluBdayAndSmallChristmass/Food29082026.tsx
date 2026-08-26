import React from 'react'
import musicPlayer from '../../hooks/MusicHook'

interface incomingParams{}

const Food29082026: React.FC<incomingParams> = () => {
    return (
    <div onClick={() => {
        musicPlayer.playSFX("Nom.mp3")
    }}>
        <h1 style={{justifySelf: "center"}} >🍪 Food Policy 🍌</h1>
        <p>Host will bake and bring something but due to the large amount of participants,</p>
        <p>we recommend to bring something yourself</p>
    </div>
    )
}

export default Food29082026