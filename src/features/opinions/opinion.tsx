import { useQuery } from '@apollo/client';
import { GET_MARKDOWN_FILE } from '../../queries/queries';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const Opinion = ():JSX.Element => {
  const { fileName } = useParams(); 
  console.log('fileName:', fileName);

    const { loading, error, data } = useQuery(GET_MARKDOWN_FILE, {
        variables: { fileName: fileName },
      });
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
    
      return (
        <div>
    
          <ReactMarkdown>{data.getMarkdownFile}</ReactMarkdown>
        </div>
      );
}
export default Opinion;