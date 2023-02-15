import { useRef } from 'react'
import 'style/state.css'

function RefNotState() {
  const emailRef = useRef()
  const passwordRef = useRef()

  function submit(e) {
    e.preventDefault()
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  return (
    <div className="state">
      <h3>Using Ref instead of State</h3>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input type="email"
          id="email"
          placeholder="Enter email"
          ref={emailRef}
        />
        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          placeholder="Enter password"
          ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RefNotState