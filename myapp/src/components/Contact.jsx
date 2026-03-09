import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Let's collaborate on something amazing.
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have
            a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-item">
            <div className="icon-box blue">
              <FaEnvelope />
            </div>
            <div>
              <span>EMAIL</span>
              <p>shivaparthugari@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box purple">
              <FaPhoneAlt />
            </div>
            <div>
              <span>PHONE</span>
              <p>+91-9390398263</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box red">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span>LOCATION</span>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form">

          <form>

            <div className="form-row">

              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe"/>
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com"/>
              </div>

            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry"/>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Your message here..." rows="5"></textarea>
            </div>

            <button className="send-btn">
              Send Message <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;