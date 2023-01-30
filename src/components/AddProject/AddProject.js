import React, { useState } from 'react'

import './add.css'
import '../DetailProject/Detail.css'
import { addDoc, collection, setDoc } from 'firebase/firestore'
import db from '../functions/firestore'
export const AddProject = (props) => {
    const [head, setHead] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [paragraph, setParagraph] = useState('')
    const addDocument = () =>{
        // Add a new document with a generated id.
        addDoc(collection(db, "projects-en"), {
            head: head,
            location: location,
            description:description,
            paragraph:paragraph,
        });
    }
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
    <input required type="text" className="form-control" id="head" onBlur={(e)=>{setHead(e.target.value)}}  />
    <div  className="form-text">write the name of project.</div>
  </div>
  <div className="mb-3">
    <label for="location" className="form-label">Location: </label>
    <input required type="text" className="form-control" id="location"  onBlur={(e)=>{setLocation(e.target.value)}}  />
    <div  className="form-text">We'll never share your Location with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">description: </label>
    <input required type="text" className="form-control" id="description" onBlur={(e)=>{setDescription(e.target.value)}}   />
    <div  className="form-text">description ..</div>
  </div>
  <div className="mb-3">
    <label for="paragraph" className="form-label">paragraph: </label>
    <input required type="text" className="form-control" id="paragraph" onBlur={(e)=>{setParagraph(e.target.value)}}   />
    <div  className="form-text">paragraph ..</div>
  </div>


  <button type="submit" onSubmit={()=>{addDocument()}} className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>


    </div>)
}
