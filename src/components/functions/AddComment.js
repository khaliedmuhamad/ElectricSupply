// import React, { useState } from 'react'
// import '../AddProject/add.css'
// import '../DetailProject/Detail.css'
// import {  collection, doc, setDoc } from 'firebase/firestore'
// import db from '../functions/firestore'

// import { UploadingTostorage } from '../functions/UploadingTostorage'

// export const AddComment = (props) => {
//   const [image, setImage] = useState('');
//     const [name, setHead] = useState(' ')
//     const [rate, setRate] = useState(' ')
//     const [title, setTitle] = useState(' ')
//     const [quote, setQuot] = useState('');
 
//     const addDocument = async() =>{
//         // Add a new document with a generated id.
//         const user=   doc(collection(db ,'users'))
//         let data = {
//             name,
//             rate,
//             title,
//             quote,
//             image
//         };
//         await setDoc(user,data)
//         }    

// const handelSub = ()=>{
//     props.setAddSow(false);
//     addDocument();
//     setHead('');
//     setTitle('');
//     setImage('');
//     setQuot('');
//     setRate(null)

// }
// console.log(image)

//   return (
//     <div className='modal' id="#addNewComment">
//         <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
//         <div className='modal-content'>
//         <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Add a comment</h1>
//         <button type="button" onClick={()=>props.setAddSow(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>

//         <form className='modal-body' role='button' >
//   <div className="mb-3">
//     <label for="head" className="form-label">head</label>
//     <input required type="text" className="form-control" id="head" onBlur={(e)=>{setHead(e.target.value)}}  />
//     <div  className="form-text">write your name of project.</div>
//   </div>
//   <div className="mb-3">
//     <label for="location" className="form-label">You job: </label>
//     <input required type="text" className="form-control" id="location"  onBlur={(e)=>{setTitle(e.target.value)}}  />
    
//   </div>
//   <div className="mb-3">
//     <label for="location" className="form-label">How many stars?: </label>
//     <input required type="number" className="form-control" id="location"  onBlur={(e)=>{setRate(e.target.value)}}  />
    
//   </div>
//   <div className="mb-3">
//     <label for="description" className="form-label">your comment: </label>
//     <input required type="text" className="form-control" id="description" onBlur={(e)=>{setQuot(e.target.value)}}   />
    
//   </div>

//   <div className="mb-3">
//     <label for="paragraph" className="form-label">images upload: </label>
//     <UploadingTostorage geturl={setImage} index='0' />
//   </div>



//   <button type="submit" onClick={()=>{handelSub() }} className="btn btn-primary">Submit</button>
// </form>
//         </div>
//         </div>


//     </div>)
// }
