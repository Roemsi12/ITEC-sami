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
let columnCounter = 1; // Counter to generate unique IDs for columns
const favItems = []; // Array to store IDs of favorited items
const Mlist = [
  "Matematica",
  "Romana",
  "Sport",
  "Engleza",
  "Biologie",
  "Franceza",
  "Religie",
  "muzica",
  "Educatie Vizuala",
  "Info",
];

Array.from(favButtons).forEach((button) => {
  button.addEventListener("click", function () {
    const itemId = button.getAttribute("data-item-id"); // Get the ID of the item
    const nameClass = Mlist[itemId - 1];
    const isFav = button.classList.contains("fav");

    if (isFav) {
      // Unfavorite the item
      button.classList.remove("fav");
      const img = button.querySelector("img");
      img.src = "../img/image.png";
      const index = favItems.indexOf(itemId);
      if (index !== -1) {
        favItems.splice(index, 1); // Remove the item ID from the array
      }
      deleteColumn(`column-${itemId}`);
    } else {
      // Favorite the item
      button.classList.add("fav");
      const img = button.querySelector("img");
      img.src = "../img/image copy.png";
      if (!favItems.includes(itemId)) {
        favItems.push(itemId); // Add the item ID to the array if not already present
      }
      addColumn(itemId, nameClass);
    }
  });
});

function addColumn(itemId, nameClass) {
  // Check if the item ID is already present in the container
  const existingColumn = document.getElementById(`column-${itemId}`);
  if (!existingColumn) {
    // Create a new column element
    const newColumn = document.createElement("div");
    newColumn.id = `column-${itemId}`;
    newColumn.classList.add("column");
    newColumn.innerHTML = `
      <p>${nameClass} <img src="../img/image copy.png"></p>
      <hr class="hr-column">
    `;

    // Append the new column to the container
    const container = document.querySelector(".container-fav");
    container.appendChild(newColumn);
  }
}

function deleteColumn(columnId) {
  const columnToRemove = document.getElementById(columnId);
  if (columnToRemove) {
    columnToRemove.remove();
  }
}
