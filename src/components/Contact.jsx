import React, { Component } from 'react';

export class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const contact = form.contact.value;
    const message = form.message.value;
    const date = form.date.value;
    const time = form.time.value;

    const subject = encodeURIComponent('New appointment request – Zohra Salon');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Contact: ${contact}\n` +
      `Preferred date: ${date}\n` +
      `Preferred time: ${time}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:fatimafaique2024@gmail.com?subject=${subject}&body=${body}`;
  };

  render() {
    return (
      <section className="Contact" id="Contact">
        <h2>Contact Zohra Salon</h2>
        <p>
          Booking your appointment or ask a question. Our team will reply as soon
          as possible.
        </p>

        <div className="contact-grid">
          <div className="contact-details">
            <h3>Visit us</h3>
            <p>BTM 1 st Stage, 9th main 3rd cross, Bengaluru</p>

            <h3>Call / WhatsApp</h3>
            <p>+91 70509966xx</p>

            <h3>Email</h3>
            <p>Zohrasalon@gmail.com</p>

            <h3>Opening hours</h3>
            <p>
              Tue – Sun: 10:00 am – 8:00 pm
              <br />
              Monday: Closed
            </p>
          </div>

          <form className="contact-form" onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Phone or Email
              <input
                type="text"
                name="contact"
                placeholder="How can we reach you?"
                required
              />
            </label>

            <label>
              Preferred date
              <input type="date" name="date" required />
            </label>

            <label>
              Preferred time
              <input type="time" name="time" required />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about the service you want"
                 style={{
                  backgroundColor: '#1f2933',  // dark background
                  color: '#f9fafb',            // light text
                  border: '1px solid #4b5563',
                  padding: '10px',
                  borderRadius: '10px'
                }}
              />
            </label>

            <button type="submit" className="btn-primary">
              Send Message / Book Appointment
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
