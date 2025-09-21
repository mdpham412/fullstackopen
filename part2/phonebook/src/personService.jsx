import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
const getAllPerson = () => {
  return axios.get(baseUrl).then(r=>r.data)
}

const createPerson = newObject => {
  return axios.post(baseUrl, newObject).then(r=>r.data)
}

const updatePerson = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(r=>r.data)
}
const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`).then(r=>r.data)
}
export default {getAllPerson,createPerson,updatePerson,deletePerson}
