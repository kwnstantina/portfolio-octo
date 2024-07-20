import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'
import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from '../timeline/timeline'
import { FaGithubAlt } from 'react-icons/fa6';


const AboutMe = ():JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 3.5 },
    },
  }

  return (
    <>
      <motion.div
        className={styles.aboutMeContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p>
          I'm a <span className={styles.specialColor}>software</span> developer
          with a passion for learning new technologies. I'm always looking for
          new <span className={styles.specialColor}>challenges</span> and{' '}
          <span className={styles.specialColor}>opportunities </span>
          to grow as a <span className={styles.specialColor}>developer</span>. I
          have experience in both frontend and backend development, and I'm
          always looking to expand my{' '}
          <span className={styles.specialColor}>skill set</span>.
        </p>
        <p>
          Well, that is totally true, but the above paragraph is a bit common I
          think, even a good <span className={styles.specialColor}>AI</span>{' '}
          could write it! So let me tell you a bit more about me.
        </p>
        <p className={styles['big-first-letter']}>So,</p>
        <ul>
          <li>
            I am a big fan of{' '}
            <span className={styles.specialColor}>sports</span>. I used to play
            fencing for the Greek national team.
          </li>
          <li>
            I have a <span className={styles.specialColor}>dog</span>, his name
            is Ater. We found him in a shelter and at once we fall in love, but
            to be honest, he is a bit of a troublemaker. He is always getting
            into things he shouldn't be, but we love him anyway.
          </li>
          <li>
            I have a big <span className={styles.specialColor}>family</span> (3
            sisters, 1 brother, 2 nephews, and 3 nieces + I'm married too).
          </li>
          <li>
            {' '}
            I love my <span className={styles.specialColor}>vilyls</span>, I
            have a big collection of them, and I'm enjoying listening to them
            while I am working. I think that music is a great way to relax and
            unwind after a long day.
          </li>
          <li> I'm enjoying FIY of pretty much any kind.</li>
          <li>
            Big fan of <span className={styles.specialColor}>philosophy</span>,{' '}
            <span className={styles.specialColor}>art</span> and{' '}
            <span className={styles.specialColor}>history</span>.
          </li>{' '}
        </ul>
        I'm working as Software Engineer the last five years.
      </motion.div>
      <motion.div
        className={styles.aboutMeContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p className={styles['title']}>Projects</p>
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>January 2023</TimelineTime>
              <TimelineTitle>Website with Maths excersices</TimelineTitle>
              <TimelineBody>
                An app with maths exercises, tutorials, maths ebook and real
                chatting.
                <h3> Technologies:</h3>
                <b>
                  Remix, Supabase, MongoDb, Prisma ORM, i18next,Tailwind,Vercel,Typescript
                </b>
              </TimelineBody>
              <div className={styles['link-container']}>
                <button
                 className={styles['link-container__button']}
                 onClick={() => window.open('https://gregkyrmaths.vercel.app/')}
                >
                  App
                </button>
                <a
                  href="https://github.com/kwnstantina/maths-joy"
                  target="_blank"
                >
                  <FaGithubAlt />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint> </TimelinePoint>
            <TimelineContent>
              <TimelineTime>April 2024</TimelineTime>
              <TimelineTitle>Rock|end</TimelineTitle>
              <TimelineBody>
                A Website for daily heroes, where they can share their stories, insights and experiences.
                <p>
                  The main goal is to inspire and motivate people to keep going and never give up.
                  Podcasts, articles, newsletter and a community forum are included.
                </p>              
                <h3> Technologies:</h3>
                <b>
                  Next.js,Turso, Drizzle ORM, Tailwind, Netlify,Typescript, Jotai State Management
                </b>
              </TimelineBody>
              <div className={styles['link-container']}>
                <button
                 className={styles['link-container__button']}
                 onClick={() => window.open('https://rockend.netlify.app')}
                >
                  App
                </button>
                <a
                  href="https://github.com/kwnstantina/Ro-kend"
                  target="_blank"
                >
                  <FaGithubAlt />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint> </TimelinePoint>
            <TimelineContent>
              <TimelineTime>April 2024</TimelineTime>
              <TimelineTitle>Rock|end</TimelineTitle>
              <TimelineBody>
                A Website for daily heroes, where they can share their stories, insights and experiences.
                <p>
                  The main goal is to inspire and motivate people to keep going and never give up.
                  Podcasts, articles, newsletter and a community forum are included.
                </p>              
                <h3> Technologies:</h3>
                <b>
                  Next.js,Turso, Drizzle ORM, Tailwind, Netlify,Typescript, Jotai State Management
                </b>
              </TimelineBody>
              <div className={styles['link-container']}>
                <button
                 className={styles['link-container__button']}
                 onClick={() => window.open('https://rockend.netlify.app')}
                >
                  App
                </button>
                <a
                  href="https://github.com/kwnstantina/Ro-kend"
                  target="_blank"
                >
                  <FaGithubAlt />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
         
        </Timeline>
      </motion.div>
    </>
  )
}

export default AboutMe
