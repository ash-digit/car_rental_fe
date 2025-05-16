const showCars = document.querySelector<HTMLButtonElement>("#showCar")
const showBookings = document.querySelector<HTMLButtonElement>("#showBookings")

const bookingSection = document.querySelector<HTMLElement>(".bookings") 
const carSection = document.querySelector<HTMLElement>(".car-inventory") 

if(!showCars){
    throw new Error("cant find show car button");
}

if(!showBookings){
    throw new Error("cant find show bookings button");
}

if(!bookingSection){
    throw new Error("cant find show booking section");
}

if(!carSection){
    throw new Error("cant find show car section");
}

showBookings.addEventListener("click", ()=>{
    console.log("click")
    carSection.style.display = "none";
    bookingSection.style.display = "block";
})


showCars.addEventListener("click", ()=>{
    console.log("click")
    bookingSection.style.display = "none";
    carSection.style.display = "block";
})