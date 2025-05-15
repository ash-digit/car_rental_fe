import type { Car } from "./Car";
import type { Customer } from "./Customer";

export type Booking = {
  id: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  bookingStatus: boolean;
  customer: Customer;
  car: Car;
};
