import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> My form </h1>

    <form >
      <p>Name</p>
      <input type="text" />

      <p>Email</p>
      <input type="text" />

      <p>Edad</p>
      <input type="text" />
    </form>

    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Edad</th>
      </tr>
    </table>
    </>
  )
}

export default App
