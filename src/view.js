class ViewMovio {
  #parentElement = document.querySelector(".box--movios");
  searchInput = document.querySelector(".header--search");
  #data;
  render(data) {
    this.#data = data;
    this.#parentElement.innerHTML = "";
    this.#data.forEach((item) => {
      this.generateHtml(item);
    });
  }

  addHandleEvent(handle) {
    document.addEventListener("keydown", function (a) {
      if (a.key === "Enter") {
        let movioName = document.querySelector(".header--search").value;
        handle(movioName);
        document.querySelector(".header--search").value = "";
      }
    });
  }
  generateHtml(data) {
    const html = ` <div class="movio">
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
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  }
}

export default new ViewMovio();
