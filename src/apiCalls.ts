import type { Booking } from "./Booking";
import type { Car } from "./Car";

import axios from "axios";
import type { Customer } from "./Customer";

export const getAllCars = async (): Promise<Car[]> => {
  const { data } = await axios.get(
    "https://carrentalbe-production.up.railway.app/api/cars"
  );
  return data;
};

export const getAllBookings = async (): Promise<Booking[]> => {
  const { data } = await axios.get(
    "https://carrentalbe-production.up.railway.app/api/bookings"
  );
  return data;
};

export const getAllCustomers = async (): Promise<Customer[]> => {
  const { data } = await axios.get(
    "https://carrentalbe-production.up.railway.app/api/customers"
  );
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
    url: "https://carrentalbe-production.up.railway.app/api/bookings",
    data: {
      customerId,
      carId,
      startDate,
      endDate,
    },
  });
};

export const patchBooking = async (id: string) => {
  await axios.patch(
    `https://carrentalbe-production.up.railway.app/api/bookings/${id}`
  );
};
