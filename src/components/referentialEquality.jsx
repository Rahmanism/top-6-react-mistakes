import { useEffect, useMemo, useState } from "react"

function ReferentialEquality() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  // The following makes a new object every time the page loads
  // so it'll trigger the useEffect hook.
  //   const person = { age, name }

  // this one won't trigger the useEffect every time
  const person = useMemo(() => ({ age, name }), [age, name])

  useEffect(() => {
    console.log(person)
  }, [person])

  return (
    <div className="state" style={{ background: darkMode ? "#333" : "#fff" }}>
      <h3>Referential Equality</h3>
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="darkmode">
        <input
          type="checkbox"
          id="darkmode"
          value={darkMode}
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        &nbsp;Dark Mode
      </label>
    </div>
  )
}

export default ReferentialEquality
