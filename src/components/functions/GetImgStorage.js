// import { getDownloadURL, ref } from "firebase/storage";
// import { useState } from "react";
// import { storage } from "./firestore";

// export const GetImge = (e="gs://electricproj-5f210.appspot.com/factory.jpg") =>{

//     const [url , Seturl] = useState("")
//     const gsReference = ref(storage, e);
    
//     getDownloadURL(gsReference)
//       .then((url) => {
//         // Insert url into an <img> tag to "download"
//         return url;
//       })
//       .catch((error) => {
//         // A full list of error codes is available at
//         // https://firebase.google.com/docs/storage/web/handle-errors
//         switch (error.code) {
//           case 'storage/object-not-found':
//             Seturl("https://via.placeholder.com/300")
//             // File doesn't exist
//             break;
//           case 'storage/unauthorized':
//             // User doesn't have permission to access the object
//              Seturl("https://via.placeholder.com/300")
//             break;
//           case 'storage/canceled':
//             // User canceled the upload
//              Seturl("https://via.placeholder.com/300")
//             break;
//           case 'storage/unknown':
//              Seturl("https://via.placeholder.com/300")
//             break;
//           default:
//               Seturl("https://via.placeholder.com/300")
//         }
//       })
//       ;

//     }