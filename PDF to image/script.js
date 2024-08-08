document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("pdf-file");
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
      convertPdfToImage(file);
    } else {
      displayMessage("Please select a valid PDF file.");
    }
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function convertPdfToImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  fetch("https://api.pdf.co/v1/pdf/convert/to/png", {
    method: "POST",
    headers: {
      "x-api-key": "YOUR_API_KEY",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayMessage("Error converting PDF to image: " + data.message);
      } else {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = "converted.png";
        link.click();
        displayMessage("File converted successfully.");
      }
    })
    .catch((error) => {
      displayMessage("Error converting PDF to image: " + error.message);
    });
}
