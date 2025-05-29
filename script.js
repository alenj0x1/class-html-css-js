const KEY_TITLE_PAGE = "title_page";
const headerTitle = document.getElementById("header-title");
const modeEditable = document.getElementById("mode-editable");

document.addEventListener("DOMContentLoaded", () => {
  console.log("se cargo todo");
  headerTitle.textContent =
    localStorage.getItem(KEY_TITLE_PAGE) ?? "Mi portafolio";
});

function changeTitlePage(e) {
  document.querySelector("body").classList.add("body-black");

  const newTitle = e.target.textContent;
  localStorage.setItem(KEY_TITLE_PAGE, newTitle);
}

function onFocusEditable() {
  modeEditable.classList.add("mode-editable-visible");
}

function onBlurEditable() {
  modeEditable.classList.remove("mode-editable-visible");
}
