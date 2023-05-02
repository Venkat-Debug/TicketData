const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".row-container");
const count = document.getElementById("count");
const total = document.getElementById("total");

let prices;

// Get prices data
fetch('https://raw.githubusercontent.com/Venkat-Debug/TicketData/main/Prices.json')
  .then(response => response.json())
  .then(data => {
    prices = data;
    updateSelectedCount();
  })
  .catch(error => console.error(error));

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  let selectedSeatsCount = selectedSeats.length;
  let totalAmount = 0;

  selectedSeats.forEach(function(seat) {
    if (seat.classList.contains("gold")) {
      totalAmount += prices.gold;
    } else if (seat.classList.contains("diamond")) {
      totalAmount += prices.diamond;
    }
  });

  count.textContent = selectedSeatsCount;
  total.textContent = `$${totalAmount}`;
}


seatContainer.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Additional event handlers


seatContainer.addEventListener("mouseenter", function(e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied") && !e.target.classList.contains("selected")) {
    e.target.classList.add("hovered");
  }
});

seatContainer.addEventListener("mouseleave", function(e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied") && !e.target.classList.contains("selected")) {
    e.target.classList.remove("hovered");
  }
});

seatContainer.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  if (e.target.classList.contains("seat") && e.target.classList.contains("selected")) {
    e.target.classList.remove("selected");
    updateSelectedCount();
  }
});
seatContainer.addEventListener("mouseover", function(e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.style.backgroundColor = "lightgrey";
  }
});
seatContainer.addEventListener("mouseout", function(e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.style.backgroundColor = "";
  }
});
window.addEventListener("beforeunload", function(e) {
  e.preventDefault();
  e.returnValue = "Are you sure you want to leave this page?";
});
document.addEventListener("keydown", function(e) {
  if (e.code === "KeyA" || e.code === "KeyD" || e.code === "KeyW" || e.code === "KeyS") {
    e.preventDefault();
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    let firstSelectedSeatIndex = -1;
    selectedSeats.forEach(function(seat) {
      if (firstSelectedSeatIndex === -1) {
        const seatIndex = Array.prototype.indexOf.call(seats, seat);
        if (seatIndex !== -1) {
          firstSelectedSeatIndex = seatIndex;
        }
      }
    });
    if (firstSelectedSeatIndex !== -1) {
      if (e.code === "KeyA" && firstSelectedSeatIndex > 0) {
        seats[firstSelectedSeatIndex - 1].classList.add("selected");
      } else if (e.code === "KeyD" && firstSelectedSeatIndex < seats.length - 1) {
        seats[firstSelectedSeatIndex + 1].classList.add("selected");
      } else if (e.code === "KeyW" && firstSelectedSeatIndex >= 10) {
        seats[firstSelectedSeatIndex - 10].classList.add("selected");
      } else if (e.code === "KeyS" && firstSelectedSeatIndex < seats.length - 10) {
        seats[firstSelectedSeatIndex + 10].classList.add("selected");
      }
      updateSelectedCount();
    }
  }
});

// Initial count and total rendering
updateSelectedCount();



class Booking {
  constructor(id, seats, totalAmount) {
    this.id = id;
    this.seats = seats;
    this.totalAmount = totalAmount;
  }

  displayBookingInfo() {
    console.log(`Booking ID: ${this.id}`);
    console.log(`Selected seats: ${this.seats}`);
    console.log(`Total amount: ${this.totalAmount}`);
  }
}


window.addEventListener("resize", function() {
  seatContainer.style.width = "80%";
  seatContainer.style.marginLeft = "10%";
  seatContainer.style.marginRight = "10%";
});


