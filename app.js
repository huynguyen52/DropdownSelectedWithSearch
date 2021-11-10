const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionContainer.classList.toggle("active");

  /**
   * reset input when every select box close
   */
  searchBox.value = "";
  filterList("");

  /**
   * focus on input when expand select box
   */
  if (optionContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionContainer.classList.remove("active");
  });
});

/**
 * start filter every input change
 */
searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

/**
 * match input with option
 */
const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionList.forEach((option) => {
    let label =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
