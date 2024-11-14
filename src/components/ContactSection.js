// ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section className="section contact" id="contact">
      <div className="row">
        <div className="col">
          <h2>Excellent Support</h2>
          <p>Support Us</p>
          <a href="#" className="btn btn-1">
            Contact
          </a>
        </div>
        <div className="col">
          <form action="">
            <div>
              <input type="email" placeholder="Email Address" />
              <a href="#">Send</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
