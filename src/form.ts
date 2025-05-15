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

// const getCarsFromAPI = async (): Promise<Car[]> => {
//   const response = await axios.get("http://localhost:8080/api/cars");
//   console.log(response.data);
//   return response.data;
// };

// const getCustomersFromAPI = async (): Promise<Customer[]> => {
//   const response = await axios.get("http://localhost:8080/api/customers");
//   console.log(response.data, "customer");
//   return response.data;
// };

// const loadAllCars = async () => {
//   allCars = await getCarsFromAPI();
// };

// const loadAllCustomer = async () => {
//   allCustomers = await getCustomersFromAPI();
// };

const init = async () => {
  try {
    allCars = await getAllCars();
    allCustomers = await getAllCustomers();
  } catch (error) {
    throw new Error(`There was an error loading data for the form, ${error}`);
  }

  const avaliableCars = allCars.filter((car) => car.availability === true);
  // Do we want the customers to disappear?
  const avaliableCustomers = allCustomers.filter(
    (customer) => customer.bookingStatus === false
  );

  //options for cars
  avaliableCars.forEach((car) => {
    const option = document.createElement("option");
    option.value = car.id.toString();
    option.textContent = `id: ${car.id} make: ${car.make} model: ${car.model}`;
    carsSelect.append(option);
  });

  //options for customers
  avaliableCustomers.forEach((customer) => {
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

  // await axios({
  //   method: "post",
  //   url: "http://localhost:8080/api/bookings",
  //   data: {
  //     customerId: formData.get("customerId"),
  //     carId: formData.get("carId"),
  //     startDate: formData.get("startDate"),
  //     endDate: formData.get("endDate"),
  //   },
  // });

  // TODO replace it not good
  window.location.reload();
});

// to do
// clear the option, and repopulate them
// instead of reset

//https://javascript.info/formdata
