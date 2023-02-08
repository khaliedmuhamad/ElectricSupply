import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { AddProject } from '../../components/AddProject/AddProject';
import { DetailProject } from '../../components/DetailProject/DetailProject';
import dp from '../../components/functions/firestore';

export const Dashboard = () => {
  const [dataProjects,setData] = useState([{images:[]}])
  const [pass, setPass] = useState()
  const [refff, setRefrish] = useState(true)
  const [show, setShow] = useState(false)
  const [addShow, setAddSow] = useState(false)
  const savedLocalStorageLanguage = () => {
    const isExistInStorage = "language" in localStorage;
    const savedLanguage = JSON.parse(localStorage.getItem("language"));
    if (isExistInStorage) {
      return savedLanguage;
    } else {
      return "DE";
    }
  };

  const [Lang, seTlang] = useState(savedLocalStorageLanguage());


  useEffect(() => {
    const fetchPost = async () => {
    
      await getDocs(collection(dp ,'projects-en'))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id,urls:[...doc.data().images]}));
              setData(newData); 
          })
     
  }
    fetchPost()
   
     }, [refff]);
     const fireFunction = (e) =>{
      setShow(true)
      setPass(e)
     }  
     const deleteColl = (id) =>{
        deleteDoc(doc(dp, "projects-en", id));
        setRefrish(prev => !prev)
      }
     
      
  return (
    <div className='Dashboard w-100'>
      <div className='container'>
        <div className='projects pt-5 d-flex flex-wrap'>
          <h5 className='col-12'>All projects</h5>
        {addShow?<AddProject setAddSow={setAddSow}/>:""}
        {show?<DetailProject data={pass} setModal={setShow} />:""}
        <button type="button" className='mt-1 col-3 card d-flex justify-content-center align-items-center bg-secondary text-light btn btn-primary' style={{maxHeight:"150px",height:'150px',minHeight:"150px"}} onClick={()=>setAddSow(true)}  data-bs-toggle="#addNewProject" data-bs-target="#staticBackdrop">
            hinzufügen <BiMessageSquareAdd /> 
            </button>
        {dataProjects?
             dataProjects.map((el, n) => {
                return (
                  <div className="p-2 mt-1 col-3"  key={n}>
                    <div className="card project-card" style={{maxHeight:"150px",height:'150px',minHeight:"150px",overflow:"hidden"}} >
                    <div className='d-flex'>
                    <button type="button" onClick={()=>{(fireFunction(el))}} className="btn btn-primary col-6" data-bs-toggle={`#${el.id}`} data-bs-target="#staticBackdrop">
<FaInfoCircle /> mehr
</button>
                    <button type="button" onClick={()=>{(deleteColl(el.id))}} className="btn btn-danger col-6 " data-bs-toggle={`#${el.id}`} data-bs-target="#staticBackdrop">
<FaInfoCircle /> delete
</button></div>
                      <div className="media-overlay" style={{maxHeight:"50px"}}>
                      {el.images[0]?
                      <img
                          src={el.images[0]}
                          alt={el.head}
                          height="100%"
                          width="100%"
                        />
                        :""
                       }
                      </div>
                      <div className="card-body">
                        <p>{el.head}</p>
                        <p>{el.paragraph}</p>
                      </div>
                    </div>


                  </div>
                );
              }):"...Loading"}
              

            
        </div>

        <div className='feedback'>

        </div>
      
      </div>
    </div>
  )
}
