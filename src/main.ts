import "./style.scss";
import type { Booking } from "./Booking";
import type { Car } from "./Car";

import { getAllBookings, getAllCars, patchBooking } from "./apiCalls";

const carInventory = document.querySelector<HTMLElement>(".car-inventory");
const bookingTable =
  document.querySelector<HTMLTableElement>("#bookings__table");

if (!carInventory) {
  throw new Error("CarInvetory Does Not Exist!");
}

if (!bookingTable) {
  throw new Error("Bookings Does Not Exist!");
}

const populateCars = async () => {
  try {
    const carsList = await getAllCars();

    carsList.forEach((element) => {
      carGenerator(element);
    });
  } catch (error) {
    throw new Error(`There was an error getting the cars: ${error}`);
  }
};

const carGenerator = (car: Car) => {
  const card = document.createElement("div");

  const innerContent = `<div class="car" id="${car.id}">
        <div class="car__image-container">
          <img class="car__image" src=${car.imageUrl} alt="image of a car" />
        </div>
        <div class="car__info-container">
          <p class="car__info car__info--make">${car.make} ${car.model}</p>
          <p class="car__info car__info--year">${car.year}</p>
          <p class="car__info car__info--price">£${car.dailyRate}</p>
          <p class="car__info car__info--availability">${
            car.availability ? "Available" : "Booked"
          }</p>
        </div>
      </div> `;
  card.innerHTML = innerContent;
  carInventory.appendChild(card);
};

const populateBookings = async () => {
  try {
    const bookingList = await getAllBookings();
    bookingList.forEach((element) => {
      bookingGenerator(element);
    });
  } catch (error) {
    throw new Error(`There was an error getting the bookings: ${error}`);
  }
};

const bookingGenerator = (booking: Booking) => {
  if (booking.bookingStatus) {
    const tableRow = document.createElement("tr");

    const innerContent = `
            <td>${booking.customer.name}</td>
            <td>${booking.startDate}</td>
            <td>${booking.endDate}</td>
            <td>${booking.car.make} ${booking.car.model}</td>
            <td>${booking.totalPrice}</td>
            <td><button id=${booking.id}>X</button></td>
          `;
    tableRow.innerHTML = innerContent;
    bookingTable.appendChild(tableRow);
  }
};

const handleBookingClick = async (e: Event) => {
  if (!e.target) {
    return;
  }
  const id = (e.target as Element).id;

  try {
    await patchBooking(id);
    window.location.reload();
  } catch (error) {
    throw new Error(`There was a problem patching the booking: ${error}`);
  }
};

populateCars();
populateBookings();

bookingTable.addEventListener("click", handleBookingClick);
