# Image to PDF Converter

This project is a simple web-based Image to PDF converter. Users can upload an image file, and the application will convert it to a PDF document using a third-party API.

## Features

- Upload an image file
- Convert the image file to a PDF document
- Download the converted PDF document

## Technologies Used

- HTML
- CSS
- JavaScript
- PDF.co API

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Upload an image file using the file input.
4. Click the "Convert" button.
5. Download the converted PDF document.

## API Key

This project uses the PDF.co API for converting image files to PDF documents. To use this project, you need to sign up for an API key from [PDF.co](https://pdf.co/).

Replace `YOUR_API_KEY` in the `script.js` file with your actual API key:

```javascript
headers: {
    'x-api-key': 'YOUR_API_KEY'
}
