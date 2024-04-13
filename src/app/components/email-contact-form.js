'use client'

import styles from "./email-contact-form.module.scss"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import localFont from 'next/font/local'
import clsx from 'clsx'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

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
      <h1 className={clsx(styles.header, rocketeers.className)}>Send me an email</h1>
      <form
        className={styles.email_form}
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={styles.email_form__input_wrapper}>
          <div className={styles.email_name_wrapper}>
            <input
              className={styles.email_form__input}
              placeholder="Name"
              type="text"
              name="user_name"
              required
            />
            <input
              className={styles.email_form__input}
              placeholder="Email"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className={styles.message_wrapper}>
            <textarea
              className={`${styles.email_form__textarea} ${styles.email_form__input}`}
              placeholder="Message"
              name="message"
              required
            />
          </div>
        </div>
      <div className={styles.submitWrapper}>
        <input
          className={clsx(styles.email_form__submit, rocketeers.className)}
          type="submit"
          value="Send"
        />
      </div>
    </form>
    </div>
  )
}
