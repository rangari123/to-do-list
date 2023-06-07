// to do

// requirements -- variales
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

// function

function addTask() {
  if (inputBox.value === "") {
    alert("You must add something!");
  } else {
    // creating list
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // adding cross icon in the list
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// clicked function

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData(); // deltete task save data
    }
  },
  false
);

inputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // 13 is the keycode for "Enter"
    event.preventDefault();
    addTask();
  }
});

// store in localstorage

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// show todo from localstorage

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// invoke
showList();
