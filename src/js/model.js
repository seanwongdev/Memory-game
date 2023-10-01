export const state = {
  hasFlippedCards: false,
  cards: [],
};

console.log(state.hasFlippedCards);

export const addFlipToArray = function (card) {
  state.cards.push(card);
};

const unflipCards = function () {
  state.cards[0].classList.toggle("flip");
  state.cards[1].classList.toggle("flip");
  state.cards.splice(0, state.cards.length);
};

export const checkMatching = function () {
  if (state.cards.length === 2) {
    if (state.cards[0].dataset.value !== state.cards[1].dataset.value) {
      setTimeout(() => {
        unflipCards();
      }, 1500);
    }
    setTimeout(() => {
      state.cards.splice(0, state.cards.length);
    }, 1500);
  }
};

// flip first card

// flip second card

// when cards === 2, check for match, if match, stay open, if not match, unflip cards. clear array at the end
