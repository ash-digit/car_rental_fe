import "./style.scss";
import type { Car } from "./Car";

import axios from "axios";

const carInventory = document.querySelector(".car-inventory");
if (!carInventory) {
  throw new Error("CarInvetory Does Not Exist!");
}
const cars = async (): Promise<Car[]> => {
  const response = await axios.get("http://localhost:8080/api/cars");
  return response.data;
};

const populateCars = async () => {
  const carsList = await cars();
  carsList.forEach((element) => {
    carGenerator(element);
  });
};

const carGenerator = (car: Car) => {
  const card = document.createElement("div");

  const innerContent = `<div class="car" id="${car.id}">
        <div class="car__image-container">
          <img class="car__image" src="https://placehold.co/200x150/png" alt="placeholder" />
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

const form = document.querySelector<HTMLFormElement>("#form");


if (!form) {
  throw new Error("form not working");
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const response = await fetch("http://localhost:8080/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formData,
  });

  const result = await response.json();

  return result;

});

await populateCars();

