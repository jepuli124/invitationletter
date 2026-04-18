import { useEffect, useRef, useState } from 'react'
import './App.css'
import AppearingText from './components/AppearingText'
import MainMenu from './components/MainMenu'
import StartText from './components/StartText'
import ChangingLetters from './components/ChangingLetters'
import FadeInWrapper from './components/FadeInWrapper'
import { verifyPassword } from './misc/file'
import DancingText from './components/DancingText'
import Fire from './components/Fire'
import AppearingAndDisappearingText from './components/ApperingAndDisappearingText'
// import Sparkles from './components/Sparkles'
//import DancingText from './components/DancingText'

function App() {
  const [state, setState] = useState(0)
  const [timer, setTimer] = useState(0) 
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [two, setTwo] = useState(2)
  const burned = useRef<boolean>(false)

  
  
  useEffect(() => {
    const runtimer = setInterval(() => {
      setTimer(oldState => oldState + 1)
    }, 1000)

    // const startTimer = setTimeout(() => {
    //   setState(oldState => {
    //     return oldState + 1
    //   })
    // }, 1000)

    return () => {
      clearInterval(runtimer)
      // clearTimeout(startTimer)
    }
  }, [])

  const check = async (element: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = await verifyPassword(element.target.value)
    if(isValid) element.target.value = ""
    setPasswordIsValid(isValid)
  }

  const checkTime = async (element: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(element.target.value)
    if(element.target.value == "22:22"){
      setTwo(1)
    }
  }

  const timedText = () => {
    const string = timer >= 60 ? Math.floor(timer/60).toString() + " minutes and " + (timer % 60).toString() : "" + (timer % 60).toString()
    return string
  }

  const countdownText = () => {
    const targetDate = new Date(2026, 3, 19, 16, 0, 0)
    const timeLeft = targetDate.getTime() - Date.now()

    if (timeLeft <= 0) {
      return 'The event has started!'
    }

    const totalSeconds = Math.floor(timeLeft / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  return (
    <>
    {
      two != 2 ?

      <>
      <section id='center'>
        <h2><AppearingAndDisappearingText givenText='You went even deeper...'></AppearingAndDisappearingText></h2>
        <h3><AppearingText givenText='Here is something you will likely appreciate:' below={true}></AppearingText></h3>
        <br />
        <h3><AppearingText givenText='Say these words to the goblin one: Your secrets are not made in vain' below={true}></AppearingText></h3>
        <br />
        <br />
        <FadeInWrapper duration={30*1000}>
          <h3 style={{color: "#f70f0f"}}><AppearingText givenText='...dloob eb lliw erehT' below={true}></AppearingText></h3>
        </FadeInWrapper>
        
        <FadeInWrapper duration={60*1000}>
            <h3 style={{color: "#64f70f"}}><a href='https://www.britannica.com/place/Salem-Massachusetts'><AppearingText givenText='Ever heard about the town of salem?' below={true}></AppearingText></a></h3>
        </FadeInWrapper>
        

        <br></br>
        <FadeInWrapper duration={2*60*1000} delay={1000}>
          <button style={cardStyle} onClick={() => {
          setTwo(2)
          setPasswordIsValid(false)
          }}>Return to menu</button>
        </FadeInWrapper>
        
      </section>
       
      </>
      :

      passwordIsValid ? 
      <section id='center'>
        <h2><DancingText givenText='Too bad...'></DancingText></h2>
        <h2>It's just another code</h2>
        <input type="time" name="" id="" onChange={checkTime}/>
        <h3><AppearingText givenText='But I will reward you for your curiosity, attention, and cleverness/effort '></AppearingText></h3>
        <FadeInWrapper delay={30*1000} duration={30*1000}>
          <h4>have a hint: "🧙‍♂️"</h4>
        </FadeInWrapper>
        
      </section>
      

      :
    
      <>
    
      <section>
        {
        

        state == 1 
        ?
        
        <>
        <h3><AppearingText givenText='You have arrived'></AppearingText></h3>
        
        </>
        :
        state == 2 ?
        <>
        <h3><DancingText givenText="🎄 starts in: 🕒 "></DancingText></h3>
        <h2>{countdownText()}</h2>
        <h2><AppearingText givenText='19.4.2026 16:00'></AppearingText></h2>
        <h2 ><AppearingText givenText='Please inform me about your participation before 24h starting' below={true}></AppearingText></h2>
        </>
        :
        <></>
        }
      
      {/* <div>
        <Sparkles spawnParticles={true}></Sparkles>
      </div> */}
      </section>

      <section id="center" style={{}}>
      <div style={{position: 'relative', display: 'inline-block', width: "100%"}}>
          {/* <img src={} style={{display: 'block'}}></img> */}
        {
          state == 0 ?
          <>
          <FadeInWrapper duration={2000}>
            <button style={cardStyle} onClick={() => setState(1)}>
              <h2>Please enter...</h2>
            </button>
          </FadeInWrapper>
          
          </>
        :
          state == 1 ? 
          <>
          <FadeInWrapper>
            <StartText completed={() => setState(2)} ></StartText>
          </FadeInWrapper>
            
          </> :<></>}

        {
          state == 2 ? 
          <>
          <FadeInWrapper>
            <MainMenu></MainMenu>
          </FadeInWrapper>
            
          </>
          :
          <></>
        }
        
      </div>

      

      </section>


      <section id="spacer">
        <FadeInWrapper>
          <p >"You seems that you have spend here {timedText()} seconds"</p>
        </FadeInWrapper>

        {
          timer < 333 ?
          <FadeInWrapper>
            <Fire burned={() => {burned.current = true}}></Fire>
          </FadeInWrapper>
          
          :
          
          <></>
        }
        
        {((timer > 333) && (burned.current == false))? 
        <>
        <FadeInWrapper>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <ChangingLetters amount={5} interval={30} stopString={"thank"}></ChangingLetters>
            <input type="text" name="pass" style={{alignItems: 'center', justifyItems: 'center'}} placeholder={"...wishing something more?..."} onChange={(Event) => check(Event)}/>
            <ChangingLetters amount={3} interval={30} stopString={"you"}></ChangingLetters>
          </div>
        </FadeInWrapper>
        
        </>
        : <></>}

      </section>
      </>
    }


  {/* <SplashCursor
    DENSITY_DISSIPATION={3.5}
    VELOCITY_DISSIPATION={2}
    PRESSURE={0.1}
    CURL={6}
    SPLAT_RADIUS={0.1}
    SPLAT_FORCE={2000}
    COLOR_UPDATE_SPEED={5}
    RAINBOW_MODE={false}
    COLOR="#A855F7"
  /> */}
    </>
  )
}

export default App


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