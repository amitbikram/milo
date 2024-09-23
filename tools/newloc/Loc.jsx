import { useState } from 'react'
import './Loc.css'
import Component from './Component.js'

function Loc() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component name="Localization"/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default Loc
