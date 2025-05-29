# Car Rental Front End

The front end aspect of a web application designed for managing a car rental service. Users of the service can view available cars, book car rentals, and view and delete their current booking. The front end interface communicates with the back end API to manage the underlying data.

## Table of Contents

- Host
- Installation
- Usage
- Features
- API Endpoints
- Technologies
- Authors

## Host

- https://ash-digit.github.io/car_rental_fe/

## Installation

- git clone https://github.com/ash-digit/car_rental_fe.git
- cd car_rental_fe
- npm install
- npm run dev

## Usage

- Use the form to manage a car rental booking:
  - Select a customer from the drop down menu.
  - Select a car from the drop down menu.
  - Select a start date from the dropdown calendar.
  - Select an end date from the dropdown calendar.
  - Press the book button to confirm the booking.
- Use the bookings table to manage all current bookings.
  - View all current bookings.
  - Select 'End Booking' to delete a specific booking.

## Features

- Book a car from a car rental service:
  - Choose from a range of cars in scrollable menu.
  - Select a start date and an end date.
  - View the booking information in a styled table.
- Mobile-first design with a responsive layout.

## API Endpoints

- Customers

  - Read all customers: GET ("/api/customers")

    - Populates the 'Choose a customer' dropdown menu with customers.

- Cars

  - Read all cars: GET ("/api/cars/)

    - Populates the 'Choose a car' dropdown menu with cars.

- Bookings

  - Create a booking: POST ("/api/bookings")

    - Posts a new booking, sending the customerId, carId, startDate and endDate.

  - Read all bookings: GET ("/api/bookings")

    - Populates the booking information table with bookings.

  - Update a booking by ID: PATCH ("/api/bookings/{id}")

    - Patches an existing booking.

## Technologies

- HTML
- SCSS
- TypeScript
- Vite

## Link

- Car Rental Back End repository: https://github.com/ash-digit/car_rental_be

## Authors

- Edward Pau: https://github.com/edpau
- Ashkan Alikhanzadeh: https://github.com/ash-digit
- Nicole Samuels: https://github.com/nma-s
- Indigo Moorcroft: https://github.com/indymoorcroft
- Jonny Ellis: https://github.com/jonnyell89
