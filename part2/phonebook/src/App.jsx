import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()

    const found = persons.find(
      (element) => element.name == newName
    )

    if (found) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(
      {
        name: newName,
      }
    ))
    setNewName('')
  }

  return (
    <div>
      {/* <div>debug: {newName}</div> */}
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button 
          type="submit"
          onClick={addName}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((entry) => (
          <div>
            {entry.name}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
