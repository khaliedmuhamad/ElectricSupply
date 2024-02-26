// import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
// import { useState } from 'react';
// import dp, { storage } from './firestore';

// export const UploadingTostorage = (props) => {

//   const [progress,setProgress] = useState(0);
//   const [url,setUrl] = useState("")
//   const metadata = {
//     contentType: 'image/jpeg'
//   };
  
//   // 'file' comes from the Blob or File API
//   const formUploadingHandler = (file) =>{

// // Create the file metadata
// /** @type {any} */


// // Upload file and metadata to the object 'images/mountains.jpg'
// const storageRef = ref(storage, 'images/' + file.name);
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//     setProgress(progress)

//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect error.serverResponse
//         break;
//     }
//   }, 
//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//       setUrl(downloadURL);
//       props.geturl(downloadURL);
//       if(props.image){props.image[props.index] =downloadURL};
//     });
//   });
//   }
//   return(
   
// <div class="input-group mb-3">
//   <input onChange={(e)=>{formUploadingHandler(e.target.files[0])}} type="file" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
//   <button class={`btn btn-outline-secondary ${progress === 100 ?'btn-success text-light':'btn-outline-secondary'} `}type="button" id="button-addon2">Upload is {progress} % done</button>
// </div>
//   )}



