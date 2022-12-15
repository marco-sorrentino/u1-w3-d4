const insertList = (event) => {
  const textInput = document.getElementById("searchInput").value;
  if (textInput === "") {
    alert("Devi digitare qualcosa");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("element-list");
    newDiv.innerText = textInput;
    newDiv.onclick = addSelectedClass;
    document.getElementsByClassName("container-list")[0].appendChild(newDiv);
    document.getElementById("searchInput").value = "";
  }
};

const removeItem = () => {
  console.log("click");
  const selectedElement = document.querySelectorAll(".selected");
  console.log(selectedElement);
  const list = document.querySelector(".container-list");
  selectedElement.forEach((element) => list.removeChild(element));
};

const addSelectedClass = (event) => {
  const clickedElement = event.target;
  clickedElement.classList.toggle("selected");
};
