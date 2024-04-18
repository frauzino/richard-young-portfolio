'use client'

import styles from './contact.module.scss'
import { EmailContactForm } from '../components/email-contact-form'
import { SocialIcons } from '../components/social_icons'

export default function Contact() {

  const socials = [
    {
      app: 'LinkedIn',
      icon: '/linkedin_icon.svg',
      url: 'https://www.linkedin.com/in/richard-frauzino-young/'
    },
    {
      app: 'Git Hub',
      icon: '/github_icon.svg',
      url: 'https://github.com/frauzino'
    },
    {
      app: 'Instagram',
      icon: '/instagram_icon.svg',
      url: 'https://www.instagram.com/bdrfrauzino/'
    }
  ]
  return (
    <div className='pageContainer'>
      <div className={styles.contactContainer}>
        <div className={styles.emailFormContainer}>
          <EmailContactForm />
        </div>
        <div className={styles.socialsContainer}>
          <SocialIcons socials={socials}/>
        </div>
      </div>
    </div>
  )
}
