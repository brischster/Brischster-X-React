import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name) {
      setErrorMessage("Email or name is invalid");
      return;
    }
    alert(`Hello ${name}, your message has been sent to Ryan!`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <p>Hello {name}</p>
      <form
        action="https://mailthis.to/brischster@gmail.com"
        method="POST"
        className="form"
      >
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message ..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <footer>
        <section>
          <h3 id="contact">Contact Me</h3>
          <div className="contactinfo">
            <a href="tel:773-793-4582"> 773-793-4582</a>
            <a href="mailto:brischster@gmail.com"> Email Me</a>
            <a href="https://github.com/brischster">Github</a>
            <a href="#">Resume</a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Form;
