const input = document.querySelector("#favchap");
const btn = document.querySelector("button");
const list = document.querySelector("#list");

btn.addEventListener("click", function () {
  if (input.value != "") {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    li.textContent = input.value;
    delBtn.textContent = "❌";
    li.append(delBtn);
    list.append(li);
    delBtn.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
    input.value = "";
  } else {
    input.focus();
  }
});
