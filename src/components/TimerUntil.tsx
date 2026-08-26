import React, { useCallback, useEffect, useState } from 'react'
import DancingText from './DancingText'

interface incomingParams{
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
}

  

const TimerUntil: React.FC<incomingParams> = ({year, month, day, hour, minute, second}) => {
    
    const countdownText = useCallback(( ) => {
        const targetDate = new Date(year, month-1, day, hour, minute, second)
        const timeLeft = targetDate.getTime() - Date.now()

        if (timeLeft <= 0) {
        return 'The event has already started!'
        }

        const totalSeconds = Math.floor(timeLeft / 1000)
        const days = Math.floor(totalSeconds / 86400)
        const hours = Math.floor((totalSeconds % 86400) / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        return `${days}d ${hours}h ${minutes}m ${seconds}s`
    }, [year, month, day, hour, minute, second])
    const [time, setTime] = useState<string>(countdownText())


    useEffect(() => {
        const clockInterval = setInterval(() => {
            setTime(countdownText())
        }, 1000)
        return() => {
            clearInterval(clockInterval)
        }
    }, [])
    return (
    <div>
        <h3><DancingText givenText="🎄 starts in: 🕒 "></DancingText></h3>
        <h2>{time}</h2>
    </div>
    )
}

export default TimerUntil