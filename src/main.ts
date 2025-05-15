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
        <div class="car__image">
          <img src="https://placehold.co/200x150" alt="placeholder" />
        </div>
        <div class="car__info">
          <p class="car__info car__info--make">${car.make} ${car.model}</p>
          <p class="car__info car__info--year">${car.year}</p>
          <p class="Car.">£${car.dailyRate}</p>
          <p class="car__info car__info--availability">${
            car.availability ? "Available" : "Booked"
          }</p>
          <button class="car__prefill">Prefill</button>
        </div>
      </div> `;
  card.innerHTML = innerContent;
  carInventory.appendChild(card);
  // carInventory.appendChild(card);
  // card.classList.add("car");
  // card.id = car.id.toString();
  // const carImage = document.createElement("div");
  // carImage.classList.add("car__image");
  // const image = document.createElement("img");
  // image.setAttribute("src", "https://placehold.co/300x200");
  // carImage.appendChild(image);
  // card.appendChild(carImage);
  // const test = document.createElement("p");
  // test.innerHTML = car.model;
  // card.appendChild(test);

  //

  //     card.innerHTML = `<p>Name:${char.name}</p>
  //                 <img src="${char.image}" alt="Image of ${char.name}">
  //                 <p>Origin:${char.origin.name}</p>
  //                 <p>Appears in ${char.occurences} episodes</p>`;
  //     return card;
};

const form = document.querySelector<HTMLFormElement>("#form");
// const output = document.querySelector<HTMLParagraphElement>("#output");

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
  // for (const [key, value] of formData.entries()) {
  //   console.log(value, typeof value);
  // }
});

await populateCars();

// const characters = await getCharacters(randomArrGenerator(MAX_CHAR, 5));
// const charList = document.querySelector<HTMLDivElement>('#charList');

// const charCardGenerator = (char: Character) => {
//     const card = document.createElement(ElementType.CARD);
//     card.classList.add('charCard');
//     card.innerHTML = `<p>Name:${char.name}</p>
//                 <img src="${char.image}" alt="Image of ${char.name}">
//                 <p>Origin:${char.origin.name}</p>
//                 <p>Appears in ${char.occurences} episodes</p>`;
//     return card;
// };

// enum ElementType {
//   CARD = 'div',
//   TEXT = 'p',
//   IMAGE = 'img',
//   SECTION = 'section',
// }
