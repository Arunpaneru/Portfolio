var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemeu = document.getElementById("sidemenu");
function openTab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-content-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-content-tab");
}

function closeMenu() {
  sidemeu.style.right = " -200px ";
}
function showMenu() {
  sidemeu.style.right = "0";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwTtXrj8c8JA0Vd0ifAbcqHRYDmsJvQOurIMdHqWdGqYaR2in3GAhW5RgnPT_dJ2I0O/exec";
const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{msg.innerHTML="Thanks for Suggestion"
  setTimeout(function(){
    msg.innerHTML=""
  },5000)
  form.reset()
})
    .catch((error) => console.error("Error!", error.message));
});
