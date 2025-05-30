const KEY_EDITABLE_JSON = "editableJSON";
const KEY_EDITABLE_ATTRIBUTE = "data-editable";
const headerTitle = document.getElementById("header-title");
const modeEditable = document.getElementById("mode-editable");

document.addEventListener("DOMContentLoaded", () => {
  initEditableJSON();
});

function initEditableJSON() {
  const elements = document.querySelectorAll(`[${KEY_EDITABLE_ATTRIBUTE}]`);

  const findEditableJSON = localStorage.getItem(KEY_EDITABLE_JSON);
  if (!findEditableJSON) {
    createEditableJSON(elements);
  }

  elements.forEach((el) => {
    // Establecer valores almacenados
    const editableJSON = localStorage.getItem(KEY_EDITABLE_JSON);
    const editableJSONParsed = JSON.parse(editableJSON);

    const key = el.getAttribute(KEY_EDITABLE_ATTRIBUTE);
    el.textContent = editableJSONParsed[key];

    // Editando
    el.addEventListener("input", (e) => {
      const editableJSON = localStorage.getItem(KEY_EDITABLE_JSON);
      const editableJSONParsed = JSON.parse(editableJSON);

      const key = e.target.getAttribute(KEY_EDITABLE_ATTRIBUTE);
      editableJSONParsed[key] = e.target.textContent;

      localStorage.setItem(
        KEY_EDITABLE_JSON,
        JSON.stringify(editableJSONParsed)
      );
    });

    el.addEventListener("focus", (_) => {
      onFocusEditable();
    });

    el.addEventListener("blur", (_) => {
      onBlurEditable();
    });
  });
}

function createEditableJSON(elements) {
  const newJSON = {};

  elements.forEach((el) => {
    const key = el.getAttribute(KEY_EDITABLE_ATTRIBUTE);
    newJSON[key] = el.textContent;
  });

  localStorage.setItem(KEY_EDITABLE_JSON, JSON.stringify(newJSON));
}

function onFocusEditable() {
  modeEditable.classList.add("mode-editable-visible");
}

function onBlurEditable() {
  modeEditable.classList.remove("mode-editable-visible");
}
