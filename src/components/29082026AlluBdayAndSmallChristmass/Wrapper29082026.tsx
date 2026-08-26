import React, { useEffect, useState } from 'react'
import CurrentEvent from '../CurrentEvent'
import Main29082026 from './Main29082026'
import musicPlayer from '../../hooks/MusicHook'
import Sparkles from '../Sparkles'

interface incomingParams{}

const Wrapper29082026: React.FC<incomingParams> = () => {
    const [particleSpawn, setParticleSpawn] = useState<boolean>(false)
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);   
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return (
    <section 
    onClick={() => {
        musicPlayer.playMusic("through the woods we ran - Vindsvept.mp3", 0.4)
        setParticleSpawn(true)
    }}
    style={{backgroundImage: 'linear-gradient(180deg, rgba(62, 22, 71, 0.52), rgba(7, 7, 56, 0))'}}>
        <section style={{minHeight:"100%", width: size[0] > size[1] ? "70%" : "100%", justifySelf: "center"}} >
            <CurrentEvent> <Main29082026></Main29082026> </CurrentEvent>
        </section>
        <Sparkles spawnParticles={particleSpawn} particleTime={500} particleCount={40} onSpawnParticles={() => {setParticleSpawn(false)}}></Sparkles>
    </section>
    )
}

export default Wrapper29082026