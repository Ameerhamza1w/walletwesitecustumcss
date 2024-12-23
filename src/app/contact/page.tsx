import React from 'react';

const Contact = () => {
  return (
    <section className='contact-form' style={{ backgroundImage: "url(contact.png)" }}>
      <div className='contact'>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <div className='form-group'>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className='form-group'>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className='form-group'>
            <input type="text" placeholder="Phone Number" required />
          </div>
          <div className='form-group'>
            <textarea placeholder='Your Message' rows={5} required></textarea>
          </div>
          <div className='form-group'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
