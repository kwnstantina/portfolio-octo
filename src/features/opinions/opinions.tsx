import { useQuery } from '@apollo/client';
import { GET_ALL_MARKDOWN_FILES } from '../../queries/queries';
import { Link } from 'react-router-dom';
import styles from './opinions.module.scss';
import SEO from '../../components/SEO';
import DidYouKnowLoader from '../../components/DidYouKnowLoader';

type MarkdownFile = {
  id: string
  title: string
  fileName: string
}

const MarkdownList = () => {
  const { loading, error, data } = useQuery(GET_ALL_MARKDOWN_FILES)

  if (loading) return <DidYouKnowLoader message="Loading thought articles" />;
  if (error) return <p className={styles.errorMessage}>Error: Oups,my server is down! </p>;

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Thoughts by Konstantina Kirtsia',
    description: 'Technical articles, opinions, and insights on web development, software engineering, and technology.',
    author: {
      '@type': 'Person',
      name: 'Konstantina Kirtsia',
    },
  };

  return (
    <>
      <SEO
        title="Thoughts & Blog - Konstantina Kirtsia"
        description="Read technical articles, opinions, and insights on web development, software engineering, React, TypeScript, and modern technologies."
        keywords="Blog, Technical Articles, Web Development, Software Engineering, React, TypeScript, Opinions"
        url="https://your-domain.com/thoughts"
        structuredData={blogListSchema}
      />
      <div className={styles['opinions']} >
        <h1>Thoughts</h1>
        <ul className={styles["opinions__items"]}>
          {data.getAllMarkdownFiles.map((file: MarkdownFile) => (
            <li key={file.id} className={styles["opinions__item"]}>
              <Link className={styles["opinions__link"]} to={`/thought/${file.fileName}`}>{file.title}</Link>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MarkdownList
