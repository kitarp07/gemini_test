// import * as pdfjs from './node_modules/pdfjs-dist/build/pdf.min.mjs';
// pdfjs.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.min.mjs'
// const url = './pdf.pdf'

import { PDFDocument } from 'pdf-lib';

async function loadPDF() {
  const existingPdfBytes = fs.readFileSync('path/to/existing.pdf');
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  console.log(pdfDoc)

  // Now you can perform modifications on the pdfDoc
}

loadPDF()




