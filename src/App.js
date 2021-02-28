import React from 'react'

function App() {
  return (
    <div className="container mt-5">
      <h1>Attention to Pets</h1>
      <hr/>
      <div LassName="row"> 
      <div className="col-8">
      <h4 className="text">PetName:
        <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>
      <h4 className="text">PetType:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>

      <h4 className="text">PetBreed:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>

      <h4 className="text">PetDate:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>

      <h4 className="text">OwnerName:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>

      <h4 className="text">OwnerPhone:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>

      </h4>
      <h4 className="text">OwnerAddress:
      <form>
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>

      <h4 className="text">OwnerEmail:
      <form >
          <input
            type="text"
            className="form"
            placeholder=" "
          />
        </form>
      </h4>
          <button className="btn btn-success btn-block"
          type="submit"
          >Add</button>

          <button className="btn btn-dark btn-block"
          type="submit"
          >Remove</button>
          <h1>holooo</h1>

      </div>
      </div>
    </div>
  )
}

export default App
