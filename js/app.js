const courses = document.querySelector("#courses-list"),
  shoppingCartContent = document.querySelector("#cart-content tbody");

//Events

loadEventListeners();

function loadEventListeners() {
  courses.addEventListener("click", buyCourses);

  //Remove from cart event
  shoppingCartContent.addEventListener("click", removeCourse);
}

function buyCourses(e) {
  e.preventDefault();
  //Event delegation

  if (e.target.classList.contains("add-to-cart")) {
    const course = e.target.parentElement.parentElement;

    //Read the values
    getCourseInfo(course);
  }
}

function getCourseInfo(course) {
  //Create an object with course data
}
