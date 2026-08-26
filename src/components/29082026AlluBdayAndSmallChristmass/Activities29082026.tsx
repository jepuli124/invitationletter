import React, { useEffect, useState } from 'react'
import musicPlayer from '../../hooks/MusicHook'

interface incomingParams{}

const URL = ""

const Activities29082026: React.FC<incomingParams> = () => {
    const [game1, setGame1] = useState<boolean>(false)

    useEffect(() => {
        const refreshInterval = setInterval(async () => {
            try{
                const response = await fetch(URL, {
                    method: 'GET',
                })
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const returnedData = await response.json()
                } catch (err) {
                console.error('Get failed:', err);
            }
        }, 5000)
        return () => {
            clearInterval(refreshInterval)
        }
    })
    return (
    <div onClick={() => {
        musicPlayer.playSFX("wow.mp3")
    }}>
        <h1 style={{justifySelf: "center"}}> 🎯 Activities 🎮 </h1>
        <p>Like always, I will try</p>
        {game1 ? 
        <>
        <a href=''>
            Welcome to a game 
        </a>
        </>
            :
        <>
            Activities will appear here as I progress
        </>    
        }
    </div>
    )
}

export default Activities29082026