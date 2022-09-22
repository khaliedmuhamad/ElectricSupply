import React from 'react'
import { footerBrand } from '../../assets/images/svgGraphics'
import {ImFacebook2, ImLinkedin, ImPaypal, ImTwitter} from  "react-icons/im"
import Anochor from '../functions/Anochor'
export const Footer = () => {


const socialData =[<ImFacebook2 />,<ImTwitter />,<ImLinkedin  />,<ImPaypal  />]
  return (
    <div className='footer  bg-primary  w-100'>
        <div  className='map'></div>
        <div className='container'>
            <div className='d-flex w-75'>
                <div className='left  '>
                    <div className='d-flex flex-column'>
                        <div className='brand-footer'>{footerBrand}</div>
                        <ul className='social-footer d-flex'>
                            {!socialData  ? "" : socialData.map((el,n)=>{
                                return  <li className='col mx-3 list-unstyled text-light'>
                                         <Anochor
                                        className="w-100 h-100 text-light"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >{el}</Anochor>

                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <div className='d-flex'>
                            <div className='col-6'>
                                <div className='p-2'>
                                    <h4></h4>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
