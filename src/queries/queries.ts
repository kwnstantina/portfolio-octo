import { gql } from '@apollo/client';

export const GET_MARKDOWN_FILE = gql`
  query GetMarkdownFile($fileName: String!) {
    getMarkdownFile(fileName: $fileName)
  }
`;

export const GET_ALL_MARKDOWN_FILES = gql`
  query GetAllMarkdownFiles {
    getAllMarkdownFiles {
      id
      title
      fileName
    }
  }
`;
