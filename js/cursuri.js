const searchInput = document.getElementById("searchInput");
const classesContainer = document.getElementById("classesContainer");
const allRows = classesContainer.getElementsByClassName("row");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Iterate over all rows and hide/show based on search term
  Array.from(allRows).forEach((row) => {
    const textContent = row.textContent.toLowerCase();
    if (textContent.includes(searchTerm)) {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });
});

const favButtons = document.getElementsByClassName("fav-btn");

Array.from(favButtons).forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("fav")) {
      button.classList.remove("fav");

      const img = button.querySelector("img");
      img.src = "../img/image.png";
    } else {
      button.classList.add("fav");
      const img = button.querySelector("img");
      img.src = "../img/image copy.png";
    }
  });
});
