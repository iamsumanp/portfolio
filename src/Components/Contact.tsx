import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const notify = () => toast.success("Form submitted!");
  const contactRef = useRef<HTMLDivElement | null>(null);
  const form = useRef<any>();
  const tline: gsap.TimelineVars | undefined = useRef();

  const q = gsap.utils.selector(contactRef);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setActive(true);
      return;
    }

    emailjs
      .sendForm(
        "service_v2swzbh",
        "template_rcz3g9r",
        form.current,
        "hhdRW3rc1RE2CP7iz"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setActive(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    tline.current = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".ContactSection",
          start: "-40 center",
          // toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        q(".h2textabout"),
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          // duration: 2,
        }
      )
      .fromTo(
        q(".formContainer"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          // duration: 2,
        },
        "-=1"
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="ContactSection" id="contact" ref={contactRef}>
      <h2 className="h2textabout">Interested In working together?</h2>
      <Toaster />
      <form className="formContainer" ref={form} onSubmit={submitHandler}>
        <div className="nameAndEmailSection">
          <div className="nameContainer">
            <label htmlFor="Name" className="label">
              Name :
            </label>
            <input
              type="text"
              name="user_name"
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
              name="user_email"
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className={active ? "active" : "activeName"}>
            Content should not be empty*
          </span>
        </div>
        <button className="submitBtn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
