import styles from './progress-bar.module.scss'

export function ProgressBar(props) {
  const value = props.value
  const type = props.type

  return (
    <div
      className={styles.progress_bar}
      style={{
        background:
        `radial-gradient(closest-side, var(--moss-green) 79%, transparent 80% 100%),
        conic-gradient(var(--indian-red) ${type === 'Proficiency' ? value : value * 20}%, var(--melon) 0)`,
      }}
    >
      <progress
        value={value}
        min={0}
        max={100}
        style={{visibility: 'hidden', height: 0, width: 0}}
      />
      <div className={styles.progress_bar_inner}>
        <div className={styles.inner_text}>
          <span>{type}</span>
          <span>{value}{type === 'Proficiency' ? '%' : ' yrs'}</span>
        </div>
      </div>
    </div>
  )
}
