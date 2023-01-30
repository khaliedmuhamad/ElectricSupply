import React, { useState } from 'react'

import './add.css'
import '../DetailProject/Detail.css'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import db, { storage } from '../functions/firestore'
import { useRef } from 'react'

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
        
    const [progress,setProgress] = useState('');
    const inputRef = useRef();


        const uploadingTostorage = (e,using) => {
          const file = e.target.files[0];
      
          const storageRef = storage.ref(file.name);
      
          storageRef.put(file).on(
            'state_changed',
            (snap) => {
              let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
              setProgress(percent);
            },
            (err) => console.log(err),
            async () => {
              const url = await storageRef.getDownloadURL();
                  url.push(using);
              setProgress(0);
              inputRef.current.value = '';
            }
          );
        };
const handelSub = ()=>{
    props.setAddSow(false);
    addDocument();
    setHead(' ');
    setLocation(' ');
    setDescription(' ');
    setParagraph(' ');
    setImages([]);
    setpdf([]);
}
  return (
    <div className='modal' id="#addNewProject">
        <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" onClick={()=>props.setAddSow(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form className='modal-body' role='button'>
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
    <label for="uplaodingimages" className="form-label">Upload Images: </label>
    <input required type="file" className="form-control" id="uplaodingimages" ref={inputRef}  onChange={(e)=>{uploadingTostorage(e.target.value,images)}}   />
    <div  className="form-text">Uploading Images: {progress}</div>
  </div>
  <div className='d-flex flex-wrap flex-column'>
    {images.length > 1 ? images.map((el,i)=>
    <div className='image-cancel ' width="80px"  onClick={()=>{return images.splice(i,1)}} >
    <img className='imageUploading' width="100%" height={"auto"} alt={el} />
    </div>
    ):"No images uploading"}
  </div>
  <div className="mb-3">
    <label for="uplaodingpdf" className="form-label">Upload Images: </label>
    <input required ref={inputRef}  type="file" className="form-control" id="uplaodingpdf" onChange={(e)=>{uploadingTostorage(e.target.value,pdf)}}   />
    <div  className="form-text">Uploading pdf: {progress}</div>
  </div>


  <button type="" onClick={()=>{handelSub() }} className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>


    </div>)
}
