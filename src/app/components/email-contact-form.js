import styles from "./email-contact-form.module.scss"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function EmailContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_hej0dne', 'template_329c318', form.current, 'Dvq8nJtPDNRQqoSMI')
      .then((result) => {
          // show the user a success message
      }, (error) => {
          // show the user an error
      });
  };

  return (
    <div className={styles.email_form__container}>
      <h2>Send me an email</h2>
      <form
        className={styles.email_form}
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={styles.email_form__input_wrapper}>
          <div className={styles.email_name_wrapper}>
            {/* <label className={styles.email_form__label}>Name</label> */}
            <input
              className={styles.email_form__input}
              placeholder="Name"
              type="text"
              name="user_name"
            />
            {/* <label className={styles.email_form__label}>Email</label> */}
            <input
              className={styles.email_form__input}
              placeholder="Email"
              type="email"
              name="user_email"
            />
          </div>
          <div className={styles.message_wrapper}>
            {/* <label className={styles.email_form__label}>Message</label> */}
            <textarea
              className={`${styles.email_form__textarea} ${styles.email_form__input}`}
              placeholder="Message"
              name="message"
            />
          </div>
        </div>
      <input
        className={styles.email_form__submit}
        type="submit"
        value="Send"
      />
    </form>
    </div>
  )
}
