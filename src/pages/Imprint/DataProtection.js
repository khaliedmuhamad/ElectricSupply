import React from 'react'
import "./Imprint.css"
import { multilang } from '../../components/functions/multilingual';
export const DataProtection = (props) => {


    let Lang = props.lang;
    let dark = props.dark;



    let LegalNoticeDaten = multilang(Lang).LegalNoticeDaten;
    let arr = multilang(Lang).LegalNoticeDaten.arr;

  return (
    <div className={`landing Imprint ${!dark ? "light" : "dark"} `}>
               <div className='flex justify-content-center align-items-center header-over'>
                <h1 className='head text-uppercase'>{LegalNoticeDaten.title}</h1>
            </div> 
        <div className='container'>
     
            
              {arr?.map((el,i)=>{
                return(
                  <div className='text-start mt-5 content'>
                                    <h6 className='content-h6'>{i + 1}. {el.title}</h6>
                <p className="content-p">
                {el.paragraph}
                </p>
            </div> 
                )
              })}

        </div>
    </div>
  )
}
