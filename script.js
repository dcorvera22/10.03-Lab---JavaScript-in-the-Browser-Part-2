window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const addBtn = document.getElementById("add-btn");
  const inputField = document.getElementById("item-input");

  // Task 2: Register click event handler for Add button
  addBtn.addEventListener("click", addBtnClick);

  // Task 3: Handle "Enter" key press on input field
  inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });

  // Attach removeTask handler to initial list items if present
  const doneButtons = document.querySelectorAll(".done-btn");
  doneButtons.forEach(button => {
    button.addEventListener("click", removeTask);
  });
}

function addBtnClick() {
  const inputField = document.getElementById("item-input");
  const titleText = inputField.value;

  // Task 4: Prevent empty entries
  if (titleText.trim() === "") {
    return;
  }

  addTask(titleText);

  // Task 3: Clear input field & reset focus back to input
  inputField.value = "";
  inputField.focus();
}

function addTask(titleText) {
  // Task 2: Create new <li> element
  const li = document.createElement("li");

  // Task 2: Set innerHTML with task text span and remove button
  li.innerHTML = `<span class="task-text">${titleText}</span><button class="done-btn">&#10006;</button>`;

  // Task 2: Find <ol> and append the new <li>
  const ol = document.querySelector("ol");
  ol.appendChild(li);

  // Task 5: Search DOM for all buttons with class done-btn and register removeTask on the last one
  const doneButtons = document.querySelectorAll(".done-btn");
  const lastButton = doneButtons[doneButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  // Task 5: Get parent <li> element and remove it from <ol>
  const li = event.target.parentNode;
  const ol = document.querySelector("ol");
  ol.removeChild(li);
}
