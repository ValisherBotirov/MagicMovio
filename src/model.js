export const state = {
  data: {},
};

export const getMovio = async function (movieName) {
  try {
    const dataJson = await fetch(
      `https://omdbapi.com/?s=${movieName}&page=1&apikey=fc1fef96`
    );
    state.data = await dataJson.json();
    console.log(state.data);
  } catch (err) {
    alert(err);
  }
};
