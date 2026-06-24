import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);

  function handleNameChange(e) {
    const currentValue = e.target.value;
    setName(currentValue);
  }

  function handleEmailChange(e) {
    const currentValue = e.target.value;
    setEmail(currentValue);
  }

  function handleEdadChange(e) {
    const currentValue = e.target.value;
    setAge(currentValue);
  }

  function handleSaveUser() {
    const newUser = {
      id : Date.now(),
      userName: name,
      userEmail: email,
      userAge: age,
    };

    //setUsers([...users,newUser]);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("")
    setEmail("")
    setAge(0)
  }

  return (
    <>
      <h1> User form </h1>

      <form>
        <p>Name</p>
        <input type="text" onChange={handleNameChange} value={name}/>

        <p>Email</p>
        <input type="text" onChange={handleEmailChange} value={email}/>

        <p>Edad</p>
        <input type="text" onChange={handleEdadChange} value={age}/>

        <div>
          <button type="button" onClick={handleSaveUser}>
            Add user
          </button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( 
              function (user){
                return(
                  
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.userAge}</td>
                  </tr>
                  
                )
              }
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
