// Get current date
let currentDate = new Date();

// Display the calendar
displayCalendar(currentDate);

// Function to display the calendar for a given week
function displayCalendar(date) {
  // Calculate the start and end dates of the week
  const startDate = new Date(date);
  startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from Sunday
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6); // End on Saturday

  // Update the week range in the calendar header
  const weekRange = `${getMonthName(
    startDate.getMonth()
  )} ${startDate.getDate()}, ${startDate.getFullYear()} - ${getMonthName(
    endDate.getMonth()
  )} ${endDate.getDate()}, ${endDate.getFullYear()}`;
  document.querySelector(".week-range").textContent = `Week of ${weekRange}`;

  // Clear the dates from the previous week
  const calendarDates = document.querySelector(".calendar-dates");
  calendarDates.innerHTML = "";

  // Add the dates for the current week
  for (let i = 0; i < 7; i++) {
    const dayColumn = document.createElement("div");
    dayColumn.classList.add("day-column");
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = `${getDayName(day.getDay())} ${day.getDate()}`;
    dayColumn.appendChild(dayCell);
    calendarDates.appendChild(dayColumn);
  }
}

// Function to get the name of the month
function getMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}

// Function to get the name of the day
function getDayName(day) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

// Event listener for previous week button
document.querySelector(".prev-week-btn").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 7);
  displayCalendar(currentDate);
});

// Event listener for next week button
document.querySelector(".next-week-btn").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 7);
  displayCalendar(currentDate);
});
