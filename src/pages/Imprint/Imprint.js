import React from 'react'
import "./Imprint.css"
import { multilang } from '../../components/functions/multilingual';
export const Imprint = (props) => {
    let Lang = props.lang;
    let dark = props.dark;
    let LegalNoticeImpressum = multilang(Lang).LegalNoticeImpressum;
    let arr1 = multilang(Lang).LegalNoticeImpressum.arr1;
    let arr2 = multilang(Lang).LegalNoticeImpressum.arr2;
  return (
    <div className={`landing Imprint ${!dark ? "light" : "dark"} `}>
               <div className='flex justify-content-center align-items-center header-over'>
                <h1 className='head text-uppercase'>{LegalNoticeImpressum.title}</h1>
            </div> 
        <div className='container'>
     
            
            <div className='text-start mt-5 content'>
                <h6 className='content-h6'>1. {LegalNoticeImpressum.header1}</h6>
                <p className="content-p">
                SpreeBoPrint
                <br />
                {arr1[0]}
                <br />
                {arr1[1]}
                <br />
                {arr1[2]} 030-72 62 57-30
                <br />
                {arr1[3]} 030-72 62 57-31
                <br />
                {arr1[4]}:  webmaster@spreeboprint.de
                <br />
                {arr1[5]}:  www.spreeboprint.de
                <br />
                {arr1[6]}:  Josef Rihm
                <br />
                {arr1[7]}
                <br />
                {arr1[8]}:  136913
                <br />
                {arr1[9]}:  DE279459016
                <br />
                {arr1[10]}: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich
                <br />
                </p>
            </div> 
            <div className='text-start mt-5 content'>
                <h6 className='content-h6'>2. {LegalNoticeImpressum.header2}</h6>
                <p className="content-p">
                SpreeBoPrint
                <br />
                {arr2[0]}
                <br />
                {arr2[1]}
                <br />
                {arr2[4]}:  webmaster@spreeboprint.de
                <br />
                </p>
            </div> 

        </div>
    </div>
  )
}
