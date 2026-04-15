import { useEffect, useState } from 'react'

import './App.css'
import AppearingText from './components/AppearingText'
import AppearingAndDisappearingText from './components/ApperingAndDisappearingText'
//import DancingText from './components/DancingText'

function App() {
  const [state, setState] = useState(0)
  const [timer, setTimer] = useState(0) 

  const startTexts = [
    'You have received a random link',
    'A link that brought you here...',
    '...and you opened it',
    'This could have been anything',
    'But this was an invitation for 🎄',
    'Thank you for your interest in 🎄',
    'But for reasons beyond my wishes',
    'I debate constantly do I do this',
    'But you know, once more with a feeling...'
  ]
  
  useEffect(() => {
    const runtimer = setInterval(() => {
      setTimer(oldState => oldState + 1)
    }, 1000)

    const startTimer = setTimeout(() => {
      setState(oldState => {
        return oldState + 1
      })
    }, 1000)

    return () => {
      clearInterval(runtimer)
      clearTimeout(startTimer)
    }
  }, [])

  const done = () => {
    setState(old => old + 1)
  }

  const timedText = () => {
    const string = timer >= 60 ? Math.floor(timer/60).toString() + " minutes and " + (timer % 60).toString() : "" + (timer % 60).toString()
    return string
  }

  return (
    <>
      <section>
        <h3><AppearingText givenText='Welcome'></AppearingText></h3>
        
      </section>
      <section id="center" style={{}}>
      <div style={{position: 'relative', display: 'inline-block', width: "100%"}}>
          {/* <img src={} style={{display: 'block'}}></img> */}
      
      {startTexts.map((text: string, index: number) => (
        <div key={index} style={{position: 'absolute', inset: 0, top: "-5vh"}}>
        {state == index + 1 ? 
        <> <h1><AppearingAndDisappearingText givenText={text} done={done}></AppearingAndDisappearingText></h1> </>
        :<></>}
        </div>
        
      ))}
      </div>

      </section>


      <section id="spacer">
        <p >"You seems that you have spend here {timedText()} seconds"</p>
      </section>
    </>
  )
}

export default App
