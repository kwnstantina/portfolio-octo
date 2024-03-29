import {useState} from 'react';
import cvFile from './resume.pdf';
import { Document, Page, pdfjs ,DocumentProps} from 'react-pdf';
import styles from './cv.module.scss';

import "react-pdf/dist/esm/Page/TextLayer.css";
import {FaDownload} from 'react-icons/fa'


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const CV=():JSX.Element=> {
  const [numPages, setNumPages] = useState<number >(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

 

  const onDocumentLoadSuccess: DocumentProps['onLoadSuccess'] = ({ numPages }) => {
    setNumPages(numPages)
  }


  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }


  return (
    <div className={styles['wrapper']}>
       {/* <p>Page {pageNumber} of {numPages}</p>
       <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Prev</button>
      <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button> */}
      <a href={cvFile} download><FaDownload size='25px'/></a>
       <Document file={cvFile as any} 
       onLoadSuccess={onDocumentLoadSuccess}
       >
      <Page pageNumber={1} renderTextLayer={false}  renderAnnotationLayer={false} />
      <Page pageNumber={2} renderTextLayer={false}  renderAnnotationLayer={false} />
      </Document>
     
     
    </div>
  );


}

  

export default CV;