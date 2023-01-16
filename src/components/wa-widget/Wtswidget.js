import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import person from "../../assets/images/people/Person1.jpeg"
export const Wtswidget = () => {
  return (
    <div>
        <FloatingWhatsApp 
        
        phoneNumber="+4915738937699"
        accountName="Verbinden"
        allowEsc
        allowClickAway
        avatar={person}
        notification
        notificationSound
        chatMessage={"Hello there! 🤝 \n How can we help? "}
        />
        
    </div>
  )
}
