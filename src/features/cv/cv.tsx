import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
//
import cvPDF from './CV.pdf';
import styles from "./cv.module.scss";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import SEO from '../../components/SEO';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CV: React.FC = ():JSX.Element => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }


  return (
    <>
      <SEO
        title="Resume / CV - Konstantina Kirtsia"
        description="View Konstantina Kirtsia's professional resume and CV. Full Stack Developer with expertise in React, TypeScript, GraphQL, and modern web development."
        keywords="Resume, CV, Konstantina Kirtsia, Full Stack Developer, Experience, Work History"
        url="https://your-domain.com/cv"
      />
      <div className={styles['cv']}>
        <Document file={cvPDF} loading={"is loading 🪂 🪂 🪂"} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <div className={styles['paginationWrapper']}>
          <button className={styles['page__button']} onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>Previous</button>
          <button className={styles['page__button']} onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>Next</button>
        </div>
      </div>
    </>
  );
};

export default CV;
