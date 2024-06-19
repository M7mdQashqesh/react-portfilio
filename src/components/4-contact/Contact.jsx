import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "./animation/done.json";
import contactAnimation from "./animation/contact.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("xleqqywb");

  return (
    <section className="parent-contact">
      <div className="up">
        <div className="title">
          <div className="icon-envelope" />
          <h2>Contact us</h2>
        </div>
        <p className="description">
          Contact us for more information and Get notified when i publish
          something new.
        </p>
      </div>

      <div className="bottom">
        <div id="contact" className="left-section">
          <form onSubmit={handleSubmit}>
            <div className="email-address">
              <label htmlFor="email">Email Address: </label>
              <input
                autoComplete="off"
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="message-area">
              <label htmlFor="text-area">Your message: </label>
              <textarea id="text-area" name="message" required></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
            {state.succeeded && (
              <p className="submit-message">
                <Lottie
                  loop={false}
                  style={{ height: "30px" }}
                  animationData={doneAnimation}
                />
                Your message has been sent successfully 👌
              </p>
            )}
          </form>
        </div>

        <div className="right-section">
        <Lottie style={{height: "400px"}} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
