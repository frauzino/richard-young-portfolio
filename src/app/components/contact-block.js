import styles from "./contact-block.module.scss"
import { EmailContactForm } from "./email-contact-form"
import Image from "next/image"
import { SocialIcons } from "./social_icons"

export function ContactBlock(props) {
  const socials = props.socials

  return (
    <div className={styles.contact_block_container}>
      <EmailContactForm />
      <SocialIcons
        socials={socials}
        parent={'ContactBlock'}
      />
    </div>
  )
}
