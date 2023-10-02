export const state = {
  cards: [],
  flippedCards: [],
  images: [
    { src: "src/img/assassin.svg" },
    { src: "src/img/cupid.svg" },
    { src: "src/img/gangster.svg" },
    { src: "src/img/knight.svg" },
    { src: "src/img/ninja.svg" },
    { src: "src/img/soldier.svg" },
    { src: "src/img/spartan.svg" },
    { src: "src/img/wrestler.svg" },
  ],
};

export const shuffleCards = function () {
  const shuffledCards = [...state.images, ...state.images]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
  state.cards = shuffledCards;
};

export const addFlipToArray = function (card) {
  state.flippedCards.push(card);
};

const unflipCards = function () {
  state.flippedCards[0].classList.remove("flip");
  state.flippedCards[1].classList.remove("flip");
  state.flippedCards.splice(0, state.flippedCards.length);
};

export const checkMatching = function () {
  if (state.flippedCards.length === 2) {
    if (
      state.flippedCards[0].dataset.value !==
      state.flippedCards[1].dataset.value
    ) {
      setTimeout(() => {
        unflipCards();
      }, 1500);
    }
    setTimeout(() => {
      state.flippedCards.splice(0, state.flippedCards.length);
    }, 1500);
  }
};
