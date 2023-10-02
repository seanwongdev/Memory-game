class CardView {
  _parentElement = document.querySelector(".cards-container");
  _resetElement = document.querySelector(".resetBtn");
  _data;

  addHandlerFlip(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;

      console.log(card);

      handler(card);
    });
  }

  addHandlerReset(handler) {
    this._resetElement.addEventListener("click", handler);
  }

  flipCard(card) {
    card.classList.add("flip");
  }

  renderShuffle(data) {
    this._data = data;
    const cardsGrid = this._generateCards();
    this._clear();
    this._parentElement.insertAdjacentHTML("beforeend", cardsGrid);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateCards() {
    return this._data
      .map(
        (card) => `<div class="card" data-value=${card.src} data-id=${card.id}>
    <img class="front-facing" src=${card.src} alt="" />
    <img class="back-facing" src="src/img/star.svg" alt="star" />
  </div>`
      )
      .join("");
  }
}

export default new CardView();
