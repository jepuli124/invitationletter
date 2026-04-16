import React, { useEffect, useRef } from 'react'

interface incomingParams{
    burned?: () => void,
    survived?: () => void
}

const Fire: React.FC<incomingParams> = ({burned = () => {}, survived = () => {} }) => {
    const isGoing = useRef<boolean>(true) 
    const addFire = () => {
        const inputField = document.querySelector('#fireClock') as HTMLInputElement

        if(!inputField || !isGoing.current){
            return
        }
        if(inputField.value.length >= 10 * 2){
            console.log("you got burned")
            isGoing.current = false
            inputField.value = "🔥You got burned🔥"
            burned()
            return
        }

        if(inputField.value.includes("💧") || inputField.value.includes("🌊") || inputField.value.includes("💦")){
            return
        } 
        inputField.value += "🔥"
        

        
        
    }

    const checkWater = () => {
        const inputField = document.querySelector('#fireClock') as HTMLInputElement

        if(!inputField){
            return
        }
        if((inputField.value.includes("💧") || inputField.value.includes("🌊") || inputField.value.includes("💦") ) && isGoing.current){
            inputField.value = "💧You extinguished the fire💧"
            isGoing.current = false
            survived()
        }
    }
    useEffect(() => {
        const fireTimer = setInterval(() => {
            addFire()
            if(!isGoing.current){
                clearInterval(fireTimer)
            }
        }, 3333)

        return () => {
            clearInterval(fireTimer)
        }
    }, [])
    return (
    <div>
        <input style={{alignItems: 'center', justifyItems: 'center'}} type="text" name="a" id="fireClock" placeholder='Played with fire before?' onChange={checkWater} />
    </div>
    )
}

export default Fire