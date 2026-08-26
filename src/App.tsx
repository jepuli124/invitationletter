
import { useState } from 'react'
import './App.css'
import './Font.css'
import './css/button.css'
import './css/inputfield.css'
import './css/card.css'
import './css/darkNight.css'
import Archive from './components/Archive'
import Wrapper29082026 from './components/29082026AlluBdayAndSmallChristmass/Wrapper29082026'


function App() {

  const [showArchive, setShowArchive] = useState<boolean>(false)

  return (
    <>
      <Wrapper29082026 />
      
    
      <section style={{marginTop: "15vh", padding: "5vh"}}>
        <button onClick={() => setShowArchive(old => !old)}>Show/Hide Archive</button>
        {showArchive? <Archive /> : <></>}
      </section>
      
    </>
  )
}

export default App


