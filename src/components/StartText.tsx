import React, { useEffect, useRef, useState } from 'react'
import { startTexts } from '../assets/StartTextConst'
import AppearingAndDisappearingText from './ApperingAndDisappearingText'
import ChangingLetters from './ChangingLetters'
import FadeInWrapper from './FadeInWrapper'
import useSound from 'use-sound'

interface incomingParams{

    completed?: () => void
}

const StartText: React.FC<incomingParams> = ({completed = () => {}}) => {
    const [state, setState] = useState(0)
    const [play, data] = useSound('./BloodWater.mp3', {
        onended: () => {play()}
    })
    const doesPlay = useRef<boolean>(false)

    useEffect(() => {
        if(localStorage.getItem("seenIntro")){
            data.stop()
            completed()
        }
    }, [])


    const done = () => {
        setState(old => {
            if(old + 1 == startTexts.length){
                localStorage.setItem("seenIntro", "true")
                data.stop()
                completed()
            }
            return old + 1
        })
    }

    return (
    <div style={{ position: 'relative', minHeight: '50vh' }} onClick={() =>  {if(!doesPlay.current) {
        doesPlay.current = true
        play()
        }}}>
        {startTexts.map((text: string, index: number) => (
        <div key={index} style={{position: 'absolute', inset: 0, top: "40%"}}>
        {state == index ? 

        text == 'RNG' ? 
        <>
        <h1><ChangingLetters amount={[9, 3]} interval={30} stopString={["beginning", "end"]}></ChangingLetters></h1>
        <h1><AppearingAndDisappearingText givenText={"..............................................................................................."} done={done}></AppearingAndDisappearingText></h1> 
        </>
        :

        <> 
        <h1><AppearingAndDisappearingText givenText={text} done={done}></AppearingAndDisappearingText></h1> 
        </>

        :<></>}
        </div>
        
      ))}
    <div style={{position: 'absolute', inset: 0, top: "100%"}}>
        <FadeInWrapper duration={2*60*1000} delay={4000}>
            <button style={cardStyle}  onClick={() => {
                localStorage.setItem("seenIntro", "true")
                data.stop()
                completed()
            } }>
                Skip this 
            </button>
        </FadeInWrapper>
        
    </div>
    
            <p style={{opacity: 0.4}}>Click for music, created by toby "radiation" fox.</p>
    </div>
    )
}

export default StartText

const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(145deg, rgba(28, 28, 40, 0.96), rgba(22, 22, 32, 0.92))',
    border: '2px solid rgba(176, 152, 255, 0.28)',
    borderRadius: '18px',
    textAlign: 'left',
    color: '#e9e8ff',
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(6px)',
    transformStyle: 'preserve-3d',
    cursor: 'pointer'
};