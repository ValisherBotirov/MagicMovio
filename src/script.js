// const searchMovio = document.querySelector(".header--search");
// const parentHtml = document.querySelector(".box--movios");

// const state = {
//   data: {},
// };

// const getMovio = async function (movieName) {
//   try {
//     const dataJson = await fetch(
//       `https://omdbapi.com/?s=${movieName}&page=1&apikey=fc1fef96`
//     );
//     state.data = await dataJson.json();
//     console.log(state.data);
//     state.data.Search.forEach(function (data) {
//       console.log(data);
//       renderHtml(data);
//     });
//   } catch (err) {
//     alert(err);
//   }
// };

// document.addEventListener("keydown", function (a) {
//   if (a.key === "Enter") {
//     getMovio(searchMovio.value);
//     console.log(searchMovio.value);
//     searchMovio.value = "";
//     parentHtml.innerHTML = "";
//   }
// });

// const renderHtml = function (data) {
//   let html = `  <div class="movio">
//   <img
//     src="${data.Poster}"
//     alt="${data.Title}"
//     class="movio--img"
//   />
//   <div class="movio--info">
//     <h2 class="movio--title">${data.Title}</h2>
//     <p class="movio--year">${data.Year}</p>
//   </div>
//   <div class="movio--text">
//     <p class="type">${data.Type}</p>
//     <p class="movio--text__lorem">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
//       consequatur repellendus aliquid ipsa possimus explicabo corrupti
//       saepe quos voluptatem? Molestias dignissimos beatae error adipisci
//       illo hic, possimus temporibus placeat?
//     </p>
//   </div>
// </div>`;
//   parentHtml.insertAdjacentHTML("afterbegin", html);
// };

// MVC architucte
import { async } from "regenerator-runtime";
import * as model from "./model.js";
import viewMovio from "./view.js";

const controlGetMovio = async function (cinema) {
  await model.getMovio(cinema);
};

async function showMovie(cinema) {
  await controlGetMovio(cinema);
  const data = model.state.data.Search;
  console.log(data);
  viewMovio.render(data);
}

viewMovio.addHandleEvent(showMovie);
