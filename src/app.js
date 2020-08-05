console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchBar = new SearchBar({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
      onRandom: () => {
        api.fetchRandomCats().then(({ data }) => this.setState(data));
      },
    });

    this.searchResult = new this.searchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        console.log("clicked image");
      },
    });
  }

  setState(nextData) {
    this.data = nextData;
  }
}

export { App };
