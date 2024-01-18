import styles from './social_icons.module.scss'
import Image from 'next/image'

export function SocialIcons(props) {
  const socials = props.socials
  const parent = props.parent

  const setSocialIcon = (social) => {
    switch (social) {
      case 'linkedin':
        return parent == 'Navbar' ? './linkedin_icon_alt.svg' : './linkedin_icon.svg'
      case 'instagram':
        return parent == 'Navbar' ? './instagram_icon_alt.svg' : './instagram_icon.svg'
      case 'github':
        return parent == 'Navbar' ? './github_icon_alt.svg' : './github_icon.svg'
      default:
        break;
    }
  }

  return (
    <div className={styles.socials_wrapper}>
      <div className={styles.social_icons_wrapper}>
        {socials?.map((social, index) => (
          <a
            key={index}
            className={styles.icon_wrapper}
            href={social.url}
            style={parent == 'Navbar' ? { width: '3rem'} : {width: '4rem'} }
          >
            <Image
              className={styles.icon}
              src={setSocialIcon(social.app)}
              alt={`Richard Young's ${social.app}`}
              width={parent == 'Navbar' ? 40 : 60}
              height={parent == 'Navbar' ? 40 : 60}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
