document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("image-file");
    const file = fileInput.files[0];

    if (file && file.type.startsWith("image/")) {
      convertImageToPdf(file);
    } else {
      displayMessage("Please select a valid image file.");
    }
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function convertImageToPdf(file) {
  const formData = new FormData();
  formData.append("file", file);

  fetch("https://api.pdf.co/v1/file/convert/to/pdf", {
    method: "POST",
    headers: {
      "x-api-key": "YOUR_API_KEY",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayMessage("Error converting image to PDF: " + data.message);
      } else {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = "converted.pdf";
        link.click();
        displayMessage("File converted successfully.");
      }
    })
    .catch((error) => {
      displayMessage("Error converting image to PDF: " + error.message);
    });
}
