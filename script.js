const insertList = (event) => {
  const textInput = document.getElementById("searchInput").value;
  if (textInput === "") {
    alert("Devi digitare qualcosa");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("element-list");
    newDiv.innerText = textInput;
    document.getElementsByClassName("container-list")[0].appendChild(newDiv);
    document.getElementById("searchInput").value = "";
  }
};

const doneList = (event) => {
  const selected = document.querySelectorAll("element-list");
  const verifyColor = window.getComputedStyle(selected).backgroundColor;
  if (verifyColor === rgb(255, 255, 255)) {
    document.document.querySelectorAll("element-list").style.backgroundColor =
      "green";
  } else {
    document.document.querySelectorAll("element-list").style.backgroundColor =
      "white";
  }
};
