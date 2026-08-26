import React, { useEffect, useState } from 'react'
import '../../css/card.css'
import TimerUntil from '../TimerUntil'
import Location29082026 from './Location29082026'
import Clothing29082026 from './Clothing29082026'
import Activities29082026 from './Activities29082026'
import Food29082026 from './Food29082026'

interface incomingParams{}

const Main29082026: React.FC<incomingParams> = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);   
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return (
    <div style={{
        minHeight: "100%",
        alignContent: "center",
    }}>
        <TimerUntil year={2026} month={8} day={29} hour={15} minute={1} second={0}  ></TimerUntil>
        <p>Music (activate by clicking the site) by Vindsvept under Attribution 4.0 International (CC BY 4.0) license</p>
        <div style={{
            height: "auto",
            display: 'grid',
            gridTemplateColumns: size[0] >= size[1] ? 'repeat(2, minmax(220px, 1fr))' : 'repeat(1, minmax(220px, 1fr))',
            gap: '16px',
            alignItems: 'stretch',
            padding: "20px",
            // filter: "blur(5px)"
        }}>
        
            <div className='card'>
                <Location29082026 />
                
            </div>
           
            <div className='card'>
                <Clothing29082026 />
            </div>
            <div className='card'>

                <Food29082026 />
            </div>
            <div className='card'>

                <Activities29082026></Activities29082026>
            </div>
        </div>
    </div>
    )
}

export default Main29082026