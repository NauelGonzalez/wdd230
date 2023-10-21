window.addEventListener("load", function () {
  const timestampInput = document.getElementById("timestamp");
  const timestampValue = new Date().toISOString();
  timestampInput.value = timestampValue;
});
