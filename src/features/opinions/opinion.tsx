import { useQuery } from '@apollo/client';
import { GET_MARKDOWN_FILE } from '../../queries/queries';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import styles from './opinions.module.scss';


const Opinion = ():JSX.Element => {
  const { fileName } = useParams(); 
    const { loading, error, data } = useQuery(GET_MARKDOWN_FILE, {
        variables: { fileName: fileName },
      });
    
  if (loading) return <p className={styles.loadingMessage}>Loading...</p>;
  if (error) return <p className={styles.errorMessage}>Error: Oups,my server is down! </p>;

      return (
        <div className={styles['opinions-list']}>    
          <ReactMarkdown >{data.getMarkdownFile}</ReactMarkdown>
        </div>
      );
}
export default Opinion;