import React from 'react';

import styles from './index.module.css';
import TextArea from './TextArea/index';

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }

  onChange = (e) => {
    if (e) this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div id="contact" className={styles.contact}>
        <h2>Contact</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <div>audiohead@audiohead.cx</div>
            <div>+1 (647) 326-3606</div>
          </div>
          <div className={styles.contact__input}>
            <label>Your Name</label>
            <input onChange={this.onChange} name="name" value={this.state.name}/>
          </div>
          <div className={styles.contact__input}>
            <label>Your E-mail</label>
            <input onChange={this.onChange} name="email" value={this.state.email} type="email"/>
          </div>
          <div className={styles.contact__input}>
            <label>Subject</label>
            <input onChange={this.onChange} name="subject" value={this.state.subject}/>
          </div>
          <div className={styles.contact__input}>
            <label>Your Message</label>
            <TextArea
              name="message"
              value={this.state.message}
              onChange={this.onChange}
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    )
  }
}