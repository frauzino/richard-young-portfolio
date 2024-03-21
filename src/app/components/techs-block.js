import styles from './techs-block.module.scss'
import { TechIcon } from './tech_icon'

export function TechsBlock(props) {
  const techs = props.techs

  return(
    <div className={styles.techs_block}>
      {techs?.map((tech, index) => (
        <TechIcon
          key={`key-${index}`}
          icon={tech.icon}
          iconAlt={tech.iconAlt}
          color={tech.color}
        />
      ))}
    </div>
  )
}
