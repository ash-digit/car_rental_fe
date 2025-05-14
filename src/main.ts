import "./style.scss";

import axios from "axios";

// axios
//   .get("http://localhost:8080/api/customers/2")
//   .then((response) => {
//     console.log("GET posts:", response.data);
//   })
//   .catch((error) => {
//     console.error("GET error:", error);
//   });

const msg1 = async () => {
  //Async Arrow Function
  try {
    const msg = await axios.get("http://localhost:8080/api/customers/2");
    const test = document.querySelector("#test");
    test!.innerHTML = msg.data.name;
  } catch (err) {
    console.log("error occured! " + err);
  }
};

await msg1();
