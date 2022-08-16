var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.className = 'list-group';
    li.appendChild(t);
    
    if (inputValue === '' || (inputValue.toString()).match(/^ *$/) !== null) {
      $(document).ready(function(){
        $('#errorToast').toast('show');
      });
    } else {
      document.getElementById("list").appendChild(li);
      $('#successToast').toast('show');
    }

    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Activate the enter key 
var newTodo = document.getElementById("task")
newTodo.addEventListener("keypress", function(event) {
  if ( newTodo == "" && event.key === "Enter") {
    $('#errorToast').toast('show');

  } else if (event.key === "Enter"){
    event.preventDefault();
    document.getElementById("liveToastBtn").onclick();
  }
});


// Change item style as "checked" when clicking on a list item
var list = document.querySelector('#list');
list.addEventListener('click', function(item) {
   if (item.target.tagName = 'li') {
     item.target.classList.toggle('checked');
  }
 });


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
