import styles from './social_icons.module.scss'
import Image from 'next/image'
import { useFlicker } from '../functions/flicker'
import { useState } from 'react'

export function SocialIcons(props) {
  const socials = props.socials
  const parent = props.parent
  const neonStyle = useFlicker({
    filter: 'drop-shadow(0 0 0px #fff) drop-shadow(0 0 7px #fff) drop-shadow(0 0 12px #bd3600) drop-shadow(0 0 15px #bd3600)'
  })
  const neonHoverStyle = {filter: 'drop-shadow(0 0 0px #fff) drop-shadow(0 0 7px #fff) drop-shadow(0 0 12px #bd3600) drop-shadow(0 0 15px #ff4901) drop-shadow(0 0 16px #ff4901)'}

  const [linkHoverStates, setLinkHoverStates] = useState(socials.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {}))
  const handleMouseEnter = (item) => {
    setLinkHoverStates({...linkHoverStates, [item]: true})
  }
  const handleMouseLeave = (item) => {
    setLinkHoverStates({...linkHoverStates, [item]: false})
  }

  const setSocialIcon = (social) => {
    switch (social) {
      case 'linkedin':
        // return parent == 'Navbar' ? './linkedin_icon_alt.svg' : './linkedin_icon.svg'
        return './linkedin_logo.svg'
      case 'instagram':
        return parent == 'Navbar' ? './instagram_icon_alt.svg' : './instagram_icon.svg'
      case 'github':
        // return parent == 'Navbar' ? './github_icon_alt.svg' : './github_logo.svg'
        return './github_logo.svg'
      default:
        break;
    }
  }

  return (
    <div className={styles.socials_wrapper}>
      <div className={styles.social_icons_wrapper}>
        {socials?.map((item, index) => (
          <a
            key={`social-${index}`}
            className={styles.icon_wrapper}
            href={item.url}
            style={parent == 'Navbar' ? { width: '3rem'} : {width: '4rem'} }
          >
            <Image
              className={styles.icon}
              src={setSocialIcon(item.app)}
              alt={`Richard Young's ${item.app}`}
              width={parent == 'Navbar' ? '60' : '80'}
              height={parent == 'Navbar' ? '60' : '80'}
              onMouseEnter={()=>[handleMouseEnter(item), console.log(item, linkHoverStates[item])]}
              onMouseLeave={()=>handleMouseLeave(item)}
              style={linkHoverStates[item] ? neonHoverStyle : neonStyle}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
