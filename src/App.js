import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="container mt-5">
      <Button color="danger" onClick={toggle}>
        Add Mascot
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Mascot</ModalHeader>
        <ModalBody>
          <form>
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
            <th>Name pet</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
