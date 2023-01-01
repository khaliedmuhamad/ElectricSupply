import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import { multilang } from "./multilingual";

function SendMail(props) {

  let Language = props.lang;
  let footerLang = multilang(Language).footer;
  const [email,setEmail] = useState('')
  const [massage,setMassage] = useState('')
  const form = useRef();

  const alertPlaceholder = document.getElementById('successMassageForm')
  const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class=" top-0 alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        emailjs
      .sendForm(
        "service_08s6d2s",
        "template_4z9j2dc",
        form.current,
        "jD4T69wgtU2BsOcFu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setEmail('');
      setMassage('');
      alert('your Email send successfuly 🐱‍🏍', 'success')
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          name="user_email"
          placeholder={footerLang.placeholder}
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label>Message</label>
        <textarea
          className="form-control"
          name="message"
          id="exampleFormControlTextarea1"
          placeholder={footerLang.placeholder}
          rows="3"
          onChange={(e)=>setMassage(e.target.value)}
          value={massage}
        />
      </div>
      <div className="mb-3">
        <button
          className="btn btn-primary w-100"
          type="submit"
          value="Send"
          rows="3"

        >
          submit
        </button>
        <div id="successMassageForm"></div>
      </div>
    </form>
  );
}

export default SendMail;
