const courses = document.querySelector("#courses-list");

//Events

loadEventListeners();

function loadEventListeners() {
  courses.addEventListener("click", buyCourses);
}

function buyCourses(e) {
  //Event delegation

  if (e.target.classList.contains("add-to-cart")) {
    e.preventDefault();
    console.log("Added");
  }
}
