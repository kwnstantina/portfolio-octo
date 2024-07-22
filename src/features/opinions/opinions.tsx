import { useQuery } from '@apollo/client';
import { GET_ALL_MARKDOWN_FILES } from '../../queries/queries';
import { Link } from 'react-router-dom';
import styles from './opinions.module.scss';

type MarkdownFile = {
  id: string
  title: string
  fileName: string
}

const MarkdownList = () => {
  const { loading, error, data } = useQuery(GET_ALL_MARKDOWN_FILES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className={styles['opinions']} >
      <h1>Opinions</h1>
      <ul className={styles["opinions_items"]}>
        {data.getAllMarkdownFiles.map((file: MarkdownFile) => (
          <li key={file.id}>
            <Link to={`/opinion/${file.fileName}`}>{file.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MarkdownList
