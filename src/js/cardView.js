class CardView {
  _parentElement = document.querySelector(".cards-container");

  addHandlerFlip(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;
      card.classList.toggle("flip");
      console.log(card);

      handler();
    });
  }
}

export default new CardView();
