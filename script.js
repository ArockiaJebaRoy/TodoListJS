const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
// const storageSet= localStorage.setItem("items", JSON.stringify(listContainer))

// const storageGet= localStorage.getItem("items")


function addTask(){
  // If the input box empty the alert box will give message
  if(inputBox.value === ''){
    alert("You must write something!!")
  }
  else{
    let li= document.createElement("li");
    li.innerHTML= inputBox.value;
    listContainer.appendChild(li)
    let span= document.createElement("span")
    span.innerHTML= "\u00d7";
    li.appendChild(span)
  }
  inputBox.value="";
  saveData();
  
}

listContainer.addEventListener("click", function(e){
  // if we click the checkbox it will do the function of css class name checked 
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  // else if we click delete icon in span tag it will delete the list
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save the todo Items
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

// Display data when we open the website
function showTask(){
   listContainer.innerHTML= localStorage.getItem("data")
}
showTask();





