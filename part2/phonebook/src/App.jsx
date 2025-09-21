import { useState, useEffect } from 'react'
import axios from 'axios'
// import Filter from './components/Filter'

const Filter = ({searchTerm, setSearchTerm}) => {
  const handleSearchTermChange = (event) =>
    setSearchTerm(event.target.value)

  return (
      <div>
        filter shown with
        <input value={searchTerm} onChange={handleSearchTermChange}/>
      </div>
  )
}
const Persons = ({persons, searchTerm}) => {
  return (
    <div>
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
const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addEntry}) => {
  return (
    <div>
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
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  useEffect((() => {
    axios
    .get('http://localhost:3001/persons')
    .then((response) => {
      console.log('request done')
      setPersons(response.data)
    })
  }), [])
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
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Filter>
      
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
        addEntry={addEntry}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} searchTerm={searchTerm}></Persons>
    </div>
  )
}

export default App
