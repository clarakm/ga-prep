fetch("/todo")
  .then(res => res.json())
  .then(data => {
    console.log("data", data);
    data.forEach(addToList);
  });

document.getElementById("todoForm").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.getElementById("todoInput").value;
  document.getElementById("todoInput").value = "";
  console.log("input", input);
  fetch("/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ item: input })
  })
    .then(res => res.json())
    .then(data => {
      addToList(data[0]);
    });
});

function addToList(obj) {
  const list = document.createElement("LI");
  list.innerText = obj.item;
  console.log("obj", obj);
  document.getElementById("todoList").appendChild(list);
  addRemoveBtn(list);
}

function addRemoveBtn(list) {
  const remove = document.createElement("BUTTON");
  remove.innerHTML = "remove";
  remove.className = "removeButton";
  remove.id = list.innerText;
  list.appendChild(remove);
  remove.addEventListener("click", e => {
    list.remove();
    removeItem(remove.id);
  });
}

function removeItem(str) {
  console.log("str", str);
  const input = str;
  fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ item: input })
  });
}
