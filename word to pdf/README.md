# Word to PDF Converter

This project is a simple web-based Word to PDF converter. Users can upload a Word file, and the application will convert it to a PDF document using a third-party API.

## Features

- Upload a Word file
- Convert the Word file to a PDF document
- Download the converted PDF document

## Technologies Used

- HTML
- CSS
- JavaScript
- PDF.co API

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Upload a Word file using the file input.
4. Click the "Convert" button.
5. Download the converted PDF document.

## API Key

This project uses the PDF.co API for converting Word files to PDF documents. To use this project, you need to sign up for an API key from [PDF.co](https://pdf.co/).

Replace `YOUR_API_KEY` in the `script.js` file with your actual API key:

```javascript
headers: {
    'x-api-key': 'YOUR_API_KEY'
}
