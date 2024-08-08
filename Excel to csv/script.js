document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("excel-file");
    const file = fileInput.files[0];

    if (
      file &&
      (file.type === "application/vnd.ms-excel" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    ) {
      convertExcelToCsv(file);
    } else {
      displayMessage("Please select a valid Excel file.");
    }
  });

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function convertExcelToCsv(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "converted.csv";
    link.click();

    displayMessage("File converted successfully.");
  };
  reader.readAsArrayBuffer(file);
}
