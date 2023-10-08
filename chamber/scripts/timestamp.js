window.addEventListener("load", function () {
  const timestampInput = document.getElementById("timestamp");
  const timestampValue = new Date().toISOString();
  timestampField.value = timestampValue;
  console.log(document.getElementById("timestamp").value);
});
