import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    var Name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("message");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if (Name.value === "" || email.value === "" || msg.value === "") {
      danger.style.display = "block";
    } else {
      setTimeout(() => {
        Name.value = "";
        email.value = "";
        msg.value = "";
      }, 2000);

      success.style.display = "block";
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 4000);

    emailjs
      .sendForm(
        "service_fsi080v",
        "template_8uo60ab",
        form.current,
        "L0SS-H3NdZXiFrsY7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alexmanea2201@gmail.com</h5>
            <a href="mailto:alexmanea2201@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Szőke-Manea Alexandru</h5>
            <a href="https://m.me/alex.manea.391082" target="_blank">
              Send a message
            </a>
            
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+40 753561065</h5>
            <a
              href="https://api.whatsapp.com/send?phone=40753561064"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            id="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <div class="message">
            <div class="success" id="success">
              Your Message Successfully Sent!
            </div>
            <div class="danger" id="danger">
              Feilds Can't be Empty!
            </div>
          </div>
        </form>
        {/*END OF CONTACT OPTIONS */}
      </div>
    </section>
  );
};

export default Contact;
