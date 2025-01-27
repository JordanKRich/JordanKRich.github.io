import React from 'react';
import '../styles/style_contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="flex-container">
        <div className="container contact-container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-details">
                <h3>Contact Information</h3>
                <p><strong>Name:</strong> Jordan Richardson</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:jkrich05@louisville.edu">
                    jkrich05@louisville.edu
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+15029364548">502-936-4548</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
