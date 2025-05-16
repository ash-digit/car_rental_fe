import type { Car } from "./Car";
import type { Customer } from "./Customer";
import { getAllCars, getAllCustomers, postBooking } from "./apiCalls";

const form = document.querySelector<HTMLFormElement>("#form");
const button = document.querySelector<HTMLButtonElement>("#formButton");
const carsSelect = document.querySelector<HTMLSelectElement>("#carsSelect");
const customersSelect =
  document.querySelector<HTMLSelectElement>("#customersSelect");

if (!form) {
  throw new Error("Cant find booking form");
}

if (!button) {
  throw new Error("Can't find form button");
}

if (!carsSelect) {
  throw new Error("Cant find carsSelect");
}

if (!customersSelect) {
  throw new Error("Cant find customerSelect");
}

let allCars: Car[] = [];
let allCustomers: Customer[] = [];

const init = async () => {
  try {
    allCars = await getAllCars();
    allCustomers = await getAllCustomers();
  } catch (error) {
    throw new Error(`There was an error loading data for the form, ${error}`);
  }

  const avaliableCars = allCars.filter((car) => car.availability === true);

  //options for cars
  avaliableCars.forEach((car) => {
    const option = document.createElement("option");
    option.value = car.id.toString();
    option.textContent = `id: ${car.id} make: ${car.make} model: ${car.model}`;
    carsSelect.append(option);
  });

  //options for customers
  allCustomers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer.id.toString();
    option.textContent = `id: ${customer.id} name: ${customer.name}`;
    customersSelect.append(option);
  });
};

init();

button.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    await postBooking(
      formData.get("customerId"),
      formData.get("carId"),
      formData.get("startDate"),
      formData.get("endDate")
    );
  } catch (error) {
    throw new Error(`There was an error posting the booking, ${error}`);
  }

  window.location.reload();
});
