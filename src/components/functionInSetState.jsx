import { useEffect, useState } from 'react'

function FuncionInSetState() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(
      "🚀 ~ file: FuncionInSetState.js:6 ~ FuncionInSetState ~ count", 
      count
    )
  }, [count])

  function adjustCount(n) {
    setCount(c => c + n)
    setCount(c => c + n)

    // this won't work 
    // setCount(count + n)
    // setCount(count + n)
  }

  return (
    <div>
      <h3>Use funcion param in seting state</h3>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span className="value">{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </div>
  )
}

export default FuncionInSetState
