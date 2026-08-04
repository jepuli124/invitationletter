import { useEffect, useRef, useState } from 'react'
import AppearingText from '../AppearingText'
import MainMenu from './MainMenu'
import StartText from './StartText'
import ChangingLetters from '../ChangingLetters'
import FadeInWrapper from '../FadeInWrapper'
import { verifyPassword } from '../../misc/file'
import DancingText from '../DancingText'
import Fire from '../Fire'
import AppearingAndDisappearingText from '../ApperingAndDisappearingText'

interface incomingParams{}

const Main1: React.FC<incomingParams> = () => {
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
    <div style={{marginTop: "5vh", height: "99vh", alignContent: "space-evenly"}}>
        {
      two != 2 ?

      <>
      <section id='center' style={{fontFamily: 'grabstein'}}>
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
      <section id='center' style={{fontFamily: 'grabstein'}}>
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
    
      <section style={{fontFamily: 'grabstein'}}>
        {
        

        state == 1 
        ?
        
        <>
        <h3><AppearingText givenText='The event has passed'></AppearingText></h3>
        
        </>
        :
        state == 2 ?
        <>
        <h3><DancingText givenText="🎄 starts in: 🕒 "></DancingText></h3>
        <h2>{countdownText()}</h2>
        <h2><AppearingText givenText='19.4.2026 16:00'></AppearingText></h2>
        <h2 ><AppearingText givenText='We unfortunately inform you that you missed this event' below={true}></AppearingText></h2>
        </>
        :
        <></>
        }
      
      {/* <div>
        <Sparkles spawnParticles={true}></Sparkles>
      </div> */}
      </section>

      <section id="center" style={{fontFamily: 'grabstein'}}>
      <div style={{position: 'relative', display: 'inline-block', width: "100%", fontFamily: 'grabstein'}}>
          {/* <img src={} style={{display: 'block'}}></img> */}
        {
          state == 0 ?
          <>
          <FadeInWrapper duration={2000}>
            <button style={cardStyle} onClick={() => setState(1)}>
              <h2 style={{fontFamily: 'grabstein'}}>Please enter...</h2>
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


      <section id="spacer" style={{fontFamily: 'grabstein'}}>
        <FadeInWrapper>
          <p >"You seems that you have spent here {timedText()} seconds"</p>
        </FadeInWrapper>

        {
          timer < 200 ?
          <FadeInWrapper>
            <Fire burned={() => {burned.current = true}}></Fire>
          </FadeInWrapper>
          
          :
          
          <></>
        }
        
        {((timer > 200) && (burned.current == false))? 
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
    </div>
    )
}

export default Main1

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