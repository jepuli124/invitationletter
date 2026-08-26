import React from 'react'
import musicPlayer from '../../hooks/MusicHook'

interface incomingParams{}

const Location29082026: React.FC<incomingParams> = () => {
    return (
    <div onClick={() => {
        musicPlayer.playSFX("5ChimesOfAntiqueClock.mp3")
    }}>
        <h1 style={{justifySelf: "center"}}>🕗 Location 🗺️</h1>
        <p>On a free fireplace but incase of others, the grassfield next to it. </p>
        <p>If it rains I figure something out and update here</p>
        <p>🕒 15:01, 29-08-2026</p>
    </div>
    )
}

export default Location29082026