import styles from "./section-header.module.scss"
import localFont from 'next/font/local'
import clsx from 'clsx';
import { useFlicker } from "../functions/flicker";

const shadeBlue = localFont({ src: '../../../public/fonts/shade-blue.regular.ttf' })

export function SectionHeader(props) {
  const header = props.header
  const neonShadow = useFlicker({textShadow: '0 0 7px #d9d9d9, 0 0 10px #d9d9d9, 0 0 15px #bc13fe, 0 0 42px #bc13fe'})

  return (
    <div className={styles.section_header_wrapper}>
      <h1 className={clsx(styles.section_header, shadeBlue.className)} style={neonShadow}>{header}</h1>
    </div>
  )
}
