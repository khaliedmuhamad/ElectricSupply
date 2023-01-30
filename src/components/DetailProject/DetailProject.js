import React from 'react';
import { GetImge } from '../functions/GetImgStorage';
import "./Detail.css";
import fact from "../../assets/images/projects/factory.jpg"
import { useState } from 'react';
import { Getdata } from '../functions/Getdata';
export const DetailProject = (props) => {
    console.log(props.data);

    const [currentimg ,setCurrentimg] = useState('')
   
  return (

<div className="modal detail  show fade"  id={props.data.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
    <div className="modal-header text-capitalize">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.data.head}</h1>
        <button type="button" className="btn-close bg-secondary rounded-circle"  onClick={()=> props.setModal(false)} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='d-flex flex-wrap'>
        <div className='col-12 col-md-6 imges'>
            <div className='d-flex flex-column'>
                <div className='col-12 h-75'>
                <img src={GetImge("gs://electricproj-5f210.appspot.com/factory.jpg")} width="100%" height="auto" alt='fact'   />
                </div>
                <div className=''>
                    <div className='d-flex'>
                        {props.data?[fact,fact,fact,fact].map((el,ind)=>{
                        return    <li key={`${el}+${ind}`} className='col-3 list-unstyled'>{<img src={el} width="100%" height="auto" alt='fact'   />}</li>
                        }):""}
                    </div>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-6 content'>
            <div className='ps-4'>
            <h3 className='text-capitalize'> {props.data.head}</h3>
            <p className='text-capitalize'><span>location </span> : {props.data.location}</p>
            <p><span>Description</span> :{props.data.description}</p>
            </div>

        </div>
    </div>
      </div>

      </div>
      </div>
</div>
 
  )
}
