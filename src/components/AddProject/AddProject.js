import React, { useState } from 'react'
import './add.css'
import '../DetailProject/Detail.css'
import {  collection, doc, setDoc } from 'firebase/firestore'
import db from '../functions/firestore'
import { useRef } from 'react'
import { UploadingTostorage } from '../functions/UploadingTostorage'

export const AddProject = (props) => {
  const [images, setImages] = useState([]);
    const [head, setHead] = useState(' ')
    const [location, setLocation] = useState(' ')
    const [description, setDescription] = useState(' ')
    const [paragraph, setParagraph] = useState(' ')
    const [pdf, setpdf] = useState('');
 
    const addDocument = async() =>{
        // Add a new document with a generated id.
        const newCity=   doc(collection(db ,'projects-en'))
        let data = {
            head: head,
            location: location,
            description:description,
            paragraph:paragraph,
            date:" ",
            images:images,
            pdf:pdf
        };
        await setDoc(newCity,data)
        }    
    const [progress,setProgress] = useState(0);
    const inputRef = useRef();

const handelSub = ()=>{
    props.setAddSow(false);
    addDocument();
    setHead('');
    setLocation('');
    setDescription('');
    setParagraph('');
    setImages([]);
    setpdf([]);
}
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    console.log('%cAddProject.JS line:94 image', 'color: #007acc;', images);

  return (
    <div className='modal' id="#addNewProject">
        <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" onClick={()=>props.setAddSow(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

        <form className='modal-body' role='button' >
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
  <div className="mb-3">
    <label for="paragraph" className="form-label">images upload: </label>
    <UploadingTostorage geturl={setImage} image={images} index='0' />
    <UploadingTostorage geturl={setImage} image={images} index='1'/>
    <UploadingTostorage geturl={setImage} image={images} index='2'/>
    <UploadingTostorage geturl={setImage} image={images} index='3'/>
    <UploadingTostorage geturl={setImage} image={images} index='4'/>

  </div>










  <button type="submit" onClick={()=>{handelSub() }} className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>


    </div>)
}
