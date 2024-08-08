document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    const markdownInput = document.getElementById("markdown-input").value;

    if (markdownInput.trim() === "") {
      displayMessage("Please enter some Markdown content.");
      return;
    }

    const htmlOutput = marked.parse(markdownInput);
    document.getElementById("html-output").innerHTML = htmlOutput;
    displayMessage("HTML generated successfully.");
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}
