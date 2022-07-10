import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const tl2: gsap.TimelineVars | undefined = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="ContactSection" id="contact" ref={contactRef}>
      <h2 className="h2textabout">Interested In working together?</h2>
      <form className="formContainer" onSubmit={submitHandler}>
        <div className="nameAndEmailSection">
          <div className="nameContainer">
            <label htmlFor="Name" className="label">
              Name :
            </label>
            <input
              type="text"
              value={name}
              className="inputForm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="emailContainer">
            <label htmlFor="Email" className="label">
              Email :
            </label>
            <input
              type="email"
              value={email}
              className="inputForm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="MessageContainer">
          <label htmlFor="Message" className="label">
            Message(optional) :
          </label>
          <textarea
            name="message"
            id="messageArea"
            // cols=30
            // rows=10
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="submitBtn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};