import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './personService'
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
const Persons = ({persons, searchTerm, handleDelete}) => {
  const handleConfirm = (elem) => {
    console.log(elem)
    if (window.confirm(`delete ${elem.name}?`)) {
      handleDelete(elem.id)
    }
  }


  return (
    <div>
      <div>
        {persons.map((entry) => (
          entry.name.toLowerCase().includes(searchTerm.toLowerCase())
          ? <div key={entry.id}>
            {entry.name}: {entry.number}
            <button onClick={() => handleConfirm(entry)}>delete</button>
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
  useEffect(() => {
    personService.getAllPerson().then(r => {
      setPersons(r)
    })
  }, [])
  const handleDelete = (id) => {
    personService.deletePerson(id).then(() => {
      setPersons(persons.filter(p => p.id !== id))
    })
  }
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
      if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        personService.updatePerson(found.id, { ...found, number: newNumber }).then(() => {
          setPersons(persons.map(p => p.id === found.id ? { ...p, number: newNumber } : p))
        })
      }
      
      return
    }

    let personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    personService.createPerson(personObject)
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
      <Persons persons={persons} searchTerm={searchTerm} handleDelete={handleDelete}></Persons>
    </div>
  )
}

export default App
