import "./style.scss";
import type { Car } from "./car";

import axios from "axios";

const carInventory = document.querySelector(".car-inventory");
if (!carInventory) {
  throw new Error("CarInvetory Does Not Exist!");
}
const cars = async (): Promise<Car[]> => {
  //Async Arrow Function
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
          <img src="https://placehold.co/300x200" alt="placeholder" />
        </div>
        <div class="car__info">
          <p class="car__info car__info--make">${car.make} ${car.model}</p>
          <p class="car__info car__info--year">${car.year}</p>
          <p class="Car.">£${car.dailyRate}</p>
          <p class="car__info car__info--availability">${car.availability}</p>
        </div>
        <button class="car__prefill">Prefill</button>
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
