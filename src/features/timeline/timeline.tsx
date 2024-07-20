import styles from './timeline.module.scss' // Make sure to create this CSS file
import {  HiCalendar } from 'react-icons/hi'

export const Timeline: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <ol className={styles["timeline"]}>{children}</ol>
}

export const TimelineItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <li className={styles["timeline__item"]}>{children}</li>
}

export const TimelinePoint: React.FC<{ children?: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <div className={styles["timeline__point"]}>
      {children}
      <span className={styles["timeline__icon-wrapper"]}>       
            <HiCalendar className={styles["timeline__icon-base"]}  />
        </span>
    
    </div>
  )
}

export const TimelineContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <div className={styles["timeline__content"]}>{children}</div>
}

export const TimelineTime: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <div className={styles["timeline__time"]}>{children}</div>
}

export const TimelineTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <h3 className={styles["timeline__title"]}>{children}</h3>
}

export const TimelineBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <p className={styles["timeline__body"]}>{children}</p>
}
