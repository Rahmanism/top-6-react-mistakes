import AbortingFetch from 'components/abortingFetch'
import FuncionInSetState from 'components/functionInSetState'
import ReferentialEquality from 'components/referentialEquality'
import RefNotState from 'components/refNotState'
import StateExample from 'components/stateExample'
import UnnecessaryUseEffect from 'components/unnecessaryUseEffect'
import 'style/App.css'

function App() {
  return (
    <div className="app">
      <h1>Top 6 React Hook Mistakes Beginners Make</h1>
      <span className="small">
        <a href="https://www.youtube.com/watch?v=GGo3MVBFr1A" target="_blank" rel="noreferrer">
          source (YouTube)
        </a>
      </span>
      <div className="block">
        <FuncionInSetState />
      </div>
      <div className="block">
        <StateExample />
      </div>
      <div className="block">
        <RefNotState />
      </div>
      <div className="block">
        <UnnecessaryUseEffect />
      </div>
      <div className="block">
        <ReferentialEquality />
      </div>
      <div className="block">
        <AbortingFetch />
      </div>
    </div>
  )
}

export default App
