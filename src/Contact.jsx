import React, {useState} from 'react'

const Contact = () => {
    const [showMessage, setShowMessage] = useState();

    const signal = (event) => {
        event.preventDefault();
        setShowMessage("You have successfully sent your message!");
        event.target.reset();
    };

  return (
    <div className="contact">
      <h1 className='contact-title'>Contact us</h1>
    <div class="contact-form">
      <form onSubmit={signal}>
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name' id="name" name="name" required/>
        </div>
        <div className="contact-field">
          <label htmlFor="surname">Surname</label>
          <input type="text" placeholder='Surname' id="surname" name="surname" required/>
        </div>
        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id="email" name="email" required/>
        </div>
        <div className="contact-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder='Message' name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
        {showMessage}
      </form>
      </div>
      </div>
  )
}

export default Contact