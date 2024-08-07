document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("pdf-file");
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
      convertPdfToWord(file);
    } else {
      displayMessage("Please select a valid PDF file.");
    }
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function convertPdfToWord(file) {
  const formData = new FormData();
  formData.append("file", file);

  fetch("https://api.pdf.co/v1/pdf/convert/to/doc", {
    method: "POST",
    headers: {
      "x-api-key": "YOUR_API_KEY",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayMessage("Error converting PDF to Word: " + data.message);
      } else {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = "converted.docx";
        link.click();
        displayMessage("File converted successfully.");
      }
    })
    .catch((error) => {
      displayMessage("Error converting PDF to Word: " + error.message);
    });
}
