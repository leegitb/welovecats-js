const API_ENDPOINT = "https://api.thecatapi.com/v1";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/breeds/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  /**
   * /api/cats/random50 사용.
   */
  fetchRandomCats: () => {
    return fetch(`${API_ENDPOINT}/images/search?limit=20`).then((res) =>
      res.json()
    );
  },
};
