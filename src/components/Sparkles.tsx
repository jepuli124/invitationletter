
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Sparkle from './Sparkle'
import useMousePosition from '../misc/MousePosition'


interface incomingParams{
    spawnParticles?: boolean
    onSpawnParticles?: () => void
    particleCount?: number
    particleTime?: number
    colors?: string[]
}

const Sparkles: React.FC<incomingParams> = ({spawnParticles = false, onSpawnParticles = () => {}, particleCount = 20, particleTime = 1000, colors = []}) => {

    const particleList = useRef<number[]>([])
    const divRef = useRef<HTMLDivElement>(null);

    const relativeLocation = useRef<{ x: number, y: number }>({x: 0, y: 0})
    const currentMouseLoc = useRef<{x: number, y: number}>({x: 0, y: 0}) 
    currentMouseLoc.current = useMousePosition()
    
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMove = useCallback(() => {
      setPos({
        x: currentMouseLoc.current.x - relativeLocation.current.x,
        y: currentMouseLoc.current.y - relativeLocation.current.y,
      });
    }, [setPos])

    const callSparkles = useCallback(() => {
      onSpawnParticles()
      handleMove()
      for (let index = 0; index < particleCount; index++) {
        particleList.current.push(particleTime)
      }

    }, [onSpawnParticles, handleMove, particleCount, particleTime])

    useEffect(() => {
      if(spawnParticles){
        callSparkles()
      }
      
    }, [spawnParticles])

    useEffect(() => {
      const localValues = () => {
        if (!divRef.current) return {x: 0, y: 0};
        
        const rect = divRef.current.getBoundingClientRect();
        relativeLocation.current = {x: rect.left, y: rect.top}
      }
      localValues()
    }, [])

    
   
    return (
    <div ref={divRef} style={{position: 'absolute', inset: 0, top: 0, left: 0, pointerEvents: "none"}}>
      {particleList.current.map((value, index) => (
        <div key={index}>
          <Sparkle lifetime={value} done={() => { particleList.current = particleList.current.splice(index, 1)}} colors={colors} location={pos}></Sparkle>
        </div>
      ))}
    </div>
    )
}

export default Sparkles

// how to use
// const [particleSpawn, setParticleSpawn] = useState<boolean>(false)
// <Sparkles spawnParticles={particleSpawn} particleTime={500} particleCount={40} onSpawnParticles={() => {setParticleSpawn(false)}}></Sparkles>