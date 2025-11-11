import { useState, useEffect } from "react";
import pdf from "@assets/RESUME_EZRA_UPDATED.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from 'framer-motion'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const variants = {
  initial: {opacity: 0},
  animate: {
    opacity: 1,
    transition:{
      ease: 'easeInOut'
    }
  },
  exit: { 
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1 }
  },
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <motion.div variants={variants} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit">
      <div className="relative py-15 md:pt-[110px] md:pb-[30px] bg-linear-to-bl from-[rgba(17,16,16,0.582)] to-[rgba(12,8,24,0.904)] text-white">
        <div className="py-12 min-h-screen">
          <div className="flex justify-center">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ResumeNew;
