import { useEffect, useState } from "react"

function UnnecessaryUseEffect() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  //   const [fullName, setFullName] = useState("")

  //   useEffect(() => {
  //     setFullName(`${firstName} ${lastName}`)
  //   }, [firstName, lastName])

  const fullName = `${firstName} ${lastName}`

  return (
    <div className="state">
      <h3>Unnecessary use of useEffect</h3>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      {fullName}
    </div>
  )
}

export default UnnecessaryUseEffect
