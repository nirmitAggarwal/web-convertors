document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const textInput = document.getElementById("text-input").value;

    if (textInput.trim() === "") {
      displayMessage("Please enter some text.");
      return;
    }

    doc.text(textInput, 10, 10);
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.pdf";
    link.click();

    displayMessage("PDF created successfully.");
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}
