const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("navigation");
  hamButton.classList.toggle("open");
});

var li_list = document.querySelectorAll("li a");

li_list.forEach(function (box) {
  box.addEventListener("click", function () {
    li_list.forEach(function (remove_li) {
      remove_li.classList.remove("active");
    });

    this.classList.add("active");
  });
});
