import clsx from 'clsx'
import styles from './svgs.module.scss'

export function Circle() {
  return (
    <svg className={clsx('svg', styles.circle)} width="290" height="290" viewBox="0 0 290 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="145" cy="145" r="80" stroke="#F18F01" strokeWidth="10"/>
      <circle cx="145" cy="145" r="100" stroke="#F18F01" strokeWidth="10"/>
      <circle cx="145" cy="145" r="120" stroke="#F18F01" strokeWidth="10"/>
      <circle cx="145" cy="145" r="140" stroke="#F18F01" strokeWidth="10"/>
    </svg>
  )
}
