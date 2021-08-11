let section = document.querySelector("section");
let add = document.querySelector("form button");

add.addEventListener("click", (e) => {
  e.preventDefault();

  //get value of text and date
  let form = e.target.parentElement;
  let text = form.children[0].value;
  let date = form.children[1].value + "/" + form.children[2].value;
  let textP = document.createElement("p");
  let dateP = document.createElement("p");
  textP.innerText = text;
  dateP.innerText = date;

  //create a check icon
  let check = document.createElement("button");
  check.innerHTML = '<i class="fas fa-check"></i>';
  check.classList.add("check");

  //add check event
  check.addEventListener("click", (e) => {
    e.preventDefault();
    let toDoItem = e.target.parentElement;
    toDoItem.classList.toggle("done");
  });

  //create a trash button
  let trash = document.createElement("button");
  trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trash.classList.add("trash");

  //add trash event
  trash.addEventListener("click", (e) => {
    let toDoItem = e.target.parentElement;
    toDoItem.remove();
  });

  //put all the thing together
  let div = document.createElement("div");
  div.appendChild(textP);
  div.appendChild(dateP);
  div.appendChild(check);
  div.appendChild(trash);
  section.appendChild(div);
});
