import styles from './tech_icon.module.scss'
import Image from 'next/image'
import { useFlicker } from '../functions/flicker'

export function TechIcon(props) {
  const icon = props.icon
  const iconAlt = props.iconAlt
  const color = props.color

  const shadowStyle = useFlicker({
    filter: `drop-shadow(0 0 0px #fff) drop-shadow(0 0 7px #fff) drop-shadow(0 0 18px ${color}) drop-shadow(0 0 18px ${color})`
  })

  return(
    <div className={styles.icon_wrapper}>
      <Image
        className={styles.icon}
        loading='lazy'
        src={icon}
        alt={iconAlt}
        height={120}
        width={120}
        style={shadowStyle}
      />
    </div>
  )
}
