import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>
          <span>04.</span>What's next?
        </h2>
        <div></div>
      </div>
      <div className="contact__details">
        <h3>Get In Touch</h3>
        <p>
          As well I’m currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <a href="mailto:murad.5behbudov@gmail.com">Say Hello</a>
      </div>
    </div>
  );
};

export default Contact;
