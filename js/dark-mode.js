function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const cheeseburgerTexts = document.querySelectorAll(".cheeseburber-texto");
  const island = document.querySelector(".island");
  cheeseburgerTexts.forEach(function (element) {
    if (body.classList.contains("dark-mode")) {
      element.classList.add("platinum-color");
      island.classList.add("dark-bg-color");
      island.classList.remove("normal-bg-color");
    } else {
      element.classList.remove("platinum-color");
      island.classList.remove("dark-bg-color");
      island.classList.add("normal-bg-color");
    }
  });
}
