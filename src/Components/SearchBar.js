class SearchBar {
  constructor({ $target, onSearch, onRandom }) {
    // 검색 input 요소 생성
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를  검색해보세요.";
    this.$searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    // 검색 이벤트 발생
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    // 랜덤 버튼 생성
    const $randomBtn = document.createElement("button");
    this.$randomBtn = $randomBtn;
    this.$randomBtn.innerHTML = "랜덤 고양이 선물!";
    this.$randomBtn.className = "RandomBtn";
    $target.appendChild($randomBtn);

    // 랜덤 버튼 이벤트 발생
    $randomBtn.addEventListener("click", (e) => {
      this.onClick(onRandom(e.target.value));
    });
  }

  render() {
    this.$randomBtn.innerHTML = "";
  }
}
