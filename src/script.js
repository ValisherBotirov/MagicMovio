/* <iframe
  width="1366"
  height="768"
  src="https://www.youtube.com/embed/nUuuIRH0zy0?list=PLx6KiwtsRjcrKqZrok06OhhtSkZgqsy9Z"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */

// https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDqKIfIjt472LwY5MwCsZqGoZtvLIZttlc&part=snippet&q={search}&maxResults=1000

const searchMovio = document.querySelector(".header--search");
const parentHtml = document.querySelector(".box--movios");

const state = {
  data: {},
};

const getMovio = async function (movieName) {
  const dataJson = await fetch(
    `https://omdbapi.com/?s=${movieName}&page=1&apikey=fc1fef96`
  );
  state.data = await dataJson.json();
  console.log(state.data);
  state.data.Search.forEach(function (data) {
    console.log(data);
    renderHtml(data);
  });
};

document.addEventListener("keydown", function (a) {
  if (a.key === "Enter") {
    // searchMovio.value = "";
    getMovio(searchMovio.value);
    console.log(searchMovio.value);
    searchMovio.value = "";
    parentHtml.innerHTML = "";
  }
});

const renderHtml = function (data) {
  let html = `  <div class="movio">
  <img
    src="${data.Poster}"
    alt="${data.Title}"
    class="movio--img"
  />
  <div class="movio--info">
    <h2 class="movio--title">${data.Title}</h2>
    <p class="movio--year">${data.Year}</p>
  </div>
  <div class="movio--text">
    <p class="type">${data.Type}</p>
    <p class="movio--text__lorem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
      consequatur repellendus aliquid ipsa possimus explicabo corrupti
      saepe quos voluptatem? Molestias dignissimos beatae error adipisci
      illo hic, possimus temporibus placeat?
    </p>
  </div>
</div>`;
  parentHtml.insertAdjacentHTML("afterbegin", html);
};
