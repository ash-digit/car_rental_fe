import type { Booking } from "./Booking";
import type { Car } from "./Car";

import axios from "axios";
import type { Customer } from "./Customer";

export const getAllCars = async (): Promise<Car[]> => {
  const { data } = await axios.get("http://localhost:8080/api/cars");
  return data;
};

export const getAllBookings = async (): Promise<Booking[]> => {
  const { data } = await axios.get("http://localhost:8080/api/bookings");
  return data;
};

export const getAllCustomers = async (): Promise<Customer[]> => {
  const { data } = await axios.get("http://localhost:8080/api/customers");
  return data;
};

export const postBooking = async (
  customerId: FormDataEntryValue | null,
  carId: FormDataEntryValue | null,
  startDate: FormDataEntryValue | null,
  endDate: FormDataEntryValue | null
) => {
  await axios({
    method: "post",
    url: "http://localhost:8080/api/bookings",
    data: {
      customerId,
      carId,
      startDate,
      endDate,
    },
  });
};

export const patchBooking = async (id: string) => {
  await axios.patch(`http://localhost:8080/api/bookings/${id}`);
};
