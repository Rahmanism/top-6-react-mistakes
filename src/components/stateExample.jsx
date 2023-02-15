import { useEffect, useState } from 'react'
import 'style/state.css'

function StateExample() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('State example:', email, password)
  }, [email, password])

  function submit(e) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="state">
      <h3>Using State</h3>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default StateExample