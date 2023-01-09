import React, { useRef } from "react";
import { useState } from "react";
import { subscripe } from "../../assets/images/svgGraphics";
import { multilang } from "../functions/multilingual";
import "./Subscribe.css";
import emailjs from "@emailjs/browser";

export const Subscribe = (props) => {
  let Language = props.lang;
  let subLang = multilang(Language).subscripe;

  // form states
  const [email, setEmail] = useState("");
  const form = useRef();

  const alertPlaceholder = document.getElementById("thissuccessMassage");
  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class=" top-0 alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  //HANDEL SUBMIT
  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvbczu7",
        "template_4z9j2dc",
        form.current,
        "jD4T69wgtU2BsOcFu"
      )
      .then(
        (res) => {
          alert("Good,WE saved Your E-mail","success")
          setEmail("")
          
        },
        (error) => {
          alert("soory,WE don't saved Your E-mail","danger")
        }
      );
  };

  return (
    <section className="subscribe ">
      <div className="container">
        <div className="d-flex align-items-end">
          <div className="right col-4 col-md-6">{subscripe}</div>
          <div className="left col-6 col-md-6 align-self-center">
            <div className="d-flex flex-column">
              <div className="top">
                <h3>{subLang.head}</h3>
                <p>{subLang.paragraph}</p>
              </div>
              <div className="bottom py-5">
                <form autoComplete="off" ref={form} onSubmit={handelSubmit}>
                  <div className="input-group flex-nowrap">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={subLang.placeholder}
                        aria-label={subLang.head}
                        aria-describedby="addon-wrapping"
                        required
                        name="user_email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <button
                        className="btn btn-outline-success"
                        type="submit"
                        id="button-addon2"
                      >
                        {subLang.sub} 🚀
                      </button>
                      <div id="thissuccessMassage"></div>
                    </div>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
