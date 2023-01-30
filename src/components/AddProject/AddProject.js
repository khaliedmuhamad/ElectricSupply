import React, { useState } from 'react'

import './add.css'
import '../DetailProject/Detail.css'
export const AddProject = (props) => {
    const [data, setData] = useState({
        
    })
  return (
    <div className='modal' id="#addNewProject">
        <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" onClick={()=>props.setAddSow(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form className='modal-body'>
  <div className="mb-3">
    <label for="head" className="form-label">head</label>
    <input type="text" className="form-control" id="head"  />
    <div  className="form-text">write the name of project.</div>
  </div>
  <div className="mb-3">
    <label for="location" className="form-label">Location: </label>
    <input type="text" className="form-control" id="location"  />
    <div  className="form-text">We'll never share your Location with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Location: </label>
    <input type="text" className="form-control" id="description"  />
    <div  className="form-text">description ..</div>
  </div>
  <div className="mb-3">
    <label for="paragraph" className="form-label">paragraph: </label>
    <input type="text" className="form-control" id="paragraph"  />
    <div  className="form-text">paragraph ..</div>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>


    </div>)
}
