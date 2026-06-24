import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email,setEmail]= useState("");
  const [edad, setEdad]= useState(0);

  function handleNameChange (e){
    const currentValue = e.target.value;
    setName(currentValue)
  };

  function handleEmailChange (e){
    const currentValue = e.target.value;
    setEmail(currentValue);
  };

  function handleEdadChange (e){
    const currentValue = e.target.value;
    setEdad(currentValue)
  };
  

  return (
    <>
      <h1> User form </h1>

      <form>
        <p>Name</p>
        <input type="text"  onChange={(handleNameChange)}/>

        <p>Email</p>
        <input type="text" onChange={(handleEmailChange)} />

        <p>Edad</p>
        <input type="text"  onChange={(handleEdadChange)} />

        <div>
          <button>Add user</button>
        </div>
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
  );
}

export default App;
