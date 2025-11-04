import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../../Assets/../Assets/RESUME_EZRA_UPDATED.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity:0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1, x:0, 
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  },
  exit: { 
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  },
  hover: { scale: 1.5, rotate: 5 },
  tap: { scale: 0.9 },
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <motion.div variants={variants} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit">
      <Container fluid className="resume-section">
        <Row className="resume"  style={{minHeight: '100vh'}}>
          <div className="d-flex justify-content-center">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          </div>
        </Row>

      </Container>
    </motion.div>
  );
}

export default ResumeNew;
