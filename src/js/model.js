export const state = {
  cards: [],
  flippedCards: [],
  images: [
    { src: "/assassin.6ba9f1dc.svg" },
    { src: "/cupid.cabbef52.svg" },
    { src: "/gangster.e294485b.svg" },
    { src: "/knight.2e44a6b9.svg" },
    { src: "/ninja.c91d846a.svg" },
    { src: "/soldier.2fc21535.svg" },
    { src: "/spartan.28924a58.svg" },
    { src: "/wrestler.3f03b2f2.svg" },
  ],
  matchedCards: [],
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
  if (state.matchedCards.includes(state.flippedCards[1])) {
    state.flippedCards.splice(1, 1);
  }

  if (state.matchedCards.includes(state.flippedCards[0])) {
    state.flippedCards.splice(0, 1);
  }
  if (state.flippedCards.length === 2) {
    if (state.flippedCards[0].dataset.id === state.flippedCards[1].dataset.id) {
      state.flippedCards.splice(1, state.flippedCards.length);
    }

    if (
      state.flippedCards[0].dataset.value !==
      state.flippedCards[1].dataset.value
    ) {
      setTimeout(() => {
        unflipCards();
      }, 1500);
    } else {
      state.matchedCards = [...state.matchedCards, ...state.flippedCards];
      console.log(state.matchedCards);
    }
    setTimeout(() => {
      state.flippedCards.splice(0, state.flippedCards.length);
    }, 1500);
  }
};
