document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("word-file");
    const file = fileInput.files[0];

    if (
      file &&
      (file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      convertWordToPdf(file);
    } else {
      displayMessage("Please select a valid Word file.");
    }
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function convertWordToPdf(file) {
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
        displayMessage("Error converting Word to PDF: " + data.message);
      } else {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = "converted.pdf";
        link.click();
        displayMessage("File converted successfully.");
      }
    })
    .catch((error) => {
      displayMessage("Error converting Word to PDF: " + error.message);
    });
}
