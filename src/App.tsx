import { useEffect } from 'react'
import styles from './App.module.scss'
import AnimatedWordList from './features/animatedWordList/animatedWordList'
import HoverEffect from './features/hoverEffect/hoverEffect'
import MatrixRain from './features/matrixRain/matrixRain'
import SEO, { personSchema, websiteSchema } from './components/SEO'
import usePageTracking from './hooks/usePageTracking'
import { initGA } from './lib/analytics'

const App = () => {
  // Initialize Google Analytics on app mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route changes
  usePageTracking();

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [personSchema, websiteSchema],
  };

  return (
    <>
      <SEO
        title="Full Stack Developer - Konstantina Kirtsia | Portfolio"
        description="Welcome to my portfolio! Full Stack Developer specializing in React, TypeScript, GraphQL, and modern web technologies. Explore my projects and expertise."
        url="https://your-domain.com/"
        structuredData={combinedSchema}
      />
      <div className={styles['wrapper']}>
        <HoverEffect>
          <div>
            <AnimatedWordList />
          </div>
        </HoverEffect>
        <MatrixRain />
      </div>
    </>
  )
}

export default App
