
import { useState } from 'react'
import './App.css'
import './Font.css'
import './css/button.css'
import './css/inputfield.css'
import Archive from './components/Archive'
import CurrentEvent from './components/CurrentEvent'


function App() {

  const [showArchive, setShowArchive] = useState<boolean>(false)

  return (
    <>

      <section>
        <CurrentEvent />
      </section>
    
      <section>
        <button onClick={() => setShowArchive(old => !old)}>Show/Hide Archive</button>
        {showArchive? <Archive /> : <></>}
      </section>
      
    </>
  )
}

export default App


