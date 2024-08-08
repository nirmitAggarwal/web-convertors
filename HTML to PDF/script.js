document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    const html2pdf = window.html2pdf;
    const htmlContent = document.getElementById("html-input").value;

    if (htmlContent.trim() === "") {
      displayMessage("Please enter some HTML content.");
      return;
    }

    const element = document.createElement("div");
    element.innerHTML = htmlContent;
    document.body.appendChild(element);

    html2pdf()
      .from(element)
      .save("converted.pdf")
      .then(() => {
        document.body.removeChild(element);
        displayMessage("PDF created successfully.");
      })
      .catch(() => {
        displayMessage("An error occurred while creating the PDF.");
      });
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}
