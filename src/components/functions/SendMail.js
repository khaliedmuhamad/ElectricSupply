import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { multilang } from "./multilingual";

function SendMail(props) {
  let Language = props.lang;
  let footerLang = multilang(Language).footer;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mkpq0b",
        "template_hjz9zo8",
        form.current,
        "HhXMMF56ISbA_xig8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        ></textarea>
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
      </div>
    </form>
  );
}

export default SendMail;
