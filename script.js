function checkInput() {
    var inputElement = document.getElementById("inputString");
    var inputValue = inputElement.value.trim();
  
    if (!isNaN(inputValue)) {
      showMessage("Yes, it is a number");
      document.body.style.backgroundColor = "#e6ffe6";
    } else {
      showMessage("No, it is not a number");
      document.body.style.backgroundColor = "#ffe6e6";
    }
  }
  
  function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
  }
  