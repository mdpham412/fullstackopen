import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const handleNameChange = (event) => 
    setNewName(event.target.value)
  const handleNumberChange = (event) => 
    setNewNumber(event.target.value)
  const handleSearchTermChange = (event) =>
    setSearchTerm(event.target.value)

  const addEntry = (event) => {
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
        number: newNumber,
        id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1
      }
    ))

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      {/* <div>debug: {newName}</div> */}
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={searchTerm} onChange={handleSearchTermChange}/>
      </div>
      <h2>Add entry</h2>
      <form>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: 
          <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={addEntry}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((entry) => (
          entry.name.toLowerCase().includes(searchTerm.toLowerCase())
          ? <div key={entry.id}>
            {entry.name}: {entry.number}
          </div> 
          : <div></div>
        ))}
      </div>
    </div>
  )
}

export default App
