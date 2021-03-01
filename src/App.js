
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import { isEmpty } from "lodash";
import { addDocument, deleteDocument, getCollection, updateDocument } from './actions'

function App() {
  const [modal, setModal] = useState(false);
  const [mascots, setMascot] = useState("")
  const [mascots, setMascots] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await getCollection("mascots")
      if (result.statusResponse) {
        setTasks(result.data)
      }
    })()
  }, [])

  const validForm = () => {
    let isValid = true
    setError(null)

    if (isEmpty(mascots)) {
      setError("Debes ingresar una mascota")
      isValid = false
    }
    
    return isValid
  }

  const addMascot= async(e) => {
    e.preventDefault()

    if (!validForm()) {
      return
    }

    const result = await addDocument("mascots", { name: mascot })
    if (!result.statusResponse) {
      setError(result.error)
      return
    }

    setMascots([ ...mascots, { id: result.data.id, name: mascot } ])
    setMascot("")
  }

  const saveMascot = async(e) => {
    e.preventDefault()

    if (!validForm()) {
      return
    }

    const result = await updateDocument("mascots", id, { name: mascot })
    if (!result.statusResponse) {
      setError(result.error)
      return
    } 

    const editedMascot = mascot.map(item => item.id === id ? { id, name: mascot} : item)
    setTasks(editedMascots)
    setEditMode(false)
    setMascot("")
    setId("")
  }

    const result = await updateDocument("mascots", id, { name: mascot })
    if (!result.statusResponse) {
      setError(result.error)
      return
    } 

    const editedMascot = mascot.map(item => item.id === id ? { id, name: mascot} : item)
    setTasks(editedMascots)
    setEditMode(false)
    setMascot("")
    setId("")
  }

  const deleteMascot = async(id) => {
    const result = await deleteDocument("mascots", id)
    if (!result.statusResponse) {
      setError(result.error)
      return
    }

    const filteredMascots = mascots.filter(mascot => mascot.id !== id)
    setMascots(filteredMascots)
  }

  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }

  
  const toggle = () => setModal(!modal);
  return (
    <div className="container mt-5">
      <Button color="danger" onClick={toggle}>
        Add Mascot
        onChange={(text) => setModal(test.target.value)}
        mascot = () => ModalBody
        value={mascot}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Mascot</ModalHeader>
        <ModalBody>
          <form onSubmit={() => mascot }>
            <input type="text" className="form" placeholder=" Pet Name" />
            <input type="text" className="form" placeholder="Pet Type" />
            <input type="text" className="form" placeholder="Pet Breed" />
            <input type="text" className="form" placeholder="Pet Date " />
            <input type="text" className="form" placeholder="Owner Name " />
            <input type="text" className="form" placeholder="Owner Phone " />
            <input type="text" className="form" placeholder="Owner Address " />
            <input type="text" className="form" placeholder="Owner Email " />

            <button className="btn btn-success btn-block" type="submit">
              Add
            </button>

            <button className="btn btn-dark btn-block" onClick={toggle}>
              Close
            </button>
          </form>
        </ModalBody>
      </Modal>
      <h1>Attention to Pets</h1>
      <hr />
      <Table dark>
        <thead>
          <tr>
            <th>Number</th>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Pet Breed</th>
            <th>Pet Date</th>
            <th>Owner Name</th>
            <th>Owner Phone</th>
            <th>Owner Address</th>
            <th>Owner Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>Mark
            <button className="btn btn-danger btn-sm float-right mx-2">Remove</button>
              <button className="btn  btn-warning btn-sm float-right">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
