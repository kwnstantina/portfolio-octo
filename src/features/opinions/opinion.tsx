import { useQuery } from '@apollo/client';
import { GET_MARKDOWN_FILE } from '../../queries/queries';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import styles from './opinions.module.scss';
import SEO from '../../components/SEO';
import DidYouKnowLoader from '../../components/DidYouKnowLoader';


const Opinion = ():JSX.Element => {
  const { fileName } = useParams();
    const { loading, error, data } = useQuery(GET_MARKDOWN_FILE, {
        variables: { fileName: fileName },
      });

  if (loading) return <DidYouKnowLoader message="Loading your article" />;
  if (error) return <p className={styles.errorMessage}>Error: Oups,my server is down! </p>;

  // Generate a readable title from filename
  const generateTitle = (name: string | undefined) => {
    if (!name) return 'Blog Post';
    return name
      .replace(/\.md$/, '')
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = generateTitle(fileName);

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    author: {
      '@type': 'Person',
      name: 'Konstantina Kirtsia',
    },
    publisher: {
      '@type': 'Person',
      name: 'Konstantina Kirtsia',
    },
  };

      return (
        <>
          <SEO
            title={`${title} - Konstantina Kirtsia`}
            description={`Read "${title}" by Konstantina Kirtsia. Technical insights and opinions on web development and software engineering.`}
            keywords={`${title}, Blog Post, Konstantina Kirtsia, Web Development, Software Engineering`}
            url={`https://your-domain.com/thought/${fileName}`}
            type="article"
            structuredData={blogPostSchema}
          />
          <div className={styles['opinions-list']}>
            <ReactMarkdown >{data.getMarkdownFile}</ReactMarkdown>
          </div>
        </>
      );
}
export default Opinion;