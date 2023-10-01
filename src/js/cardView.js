class CardView {
  _parentElement = document.querySelector(".cards-container");

  addHandlerFlip(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;

      console.log(card);

      handler(card);
    });
  }

  flipCard(card) {
    card.classList.toggle("flip");
  }
}

export default new CardView();
