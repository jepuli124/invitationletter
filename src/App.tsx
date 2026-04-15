import { useState } from 'react'

import './App.css'
import AppearingText from './components/appearingText'

function App() {
  const [state, setState] = useState(0)

  return (
    <>
      <section id="center">

          <h1><AppearingText givenText='You have received an link here...'></AppearingText></h1>

      </section>

    
      <section>

      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
