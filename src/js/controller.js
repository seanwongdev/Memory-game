import "bootstrap/dist/css/bootstrap.css";
import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js";
import cardView from "./cardView.js";

const controlShuffle = function () {
  model.shuffleCards();
  console.log(model.state.cards);
  cardView.renderShuffle(model.state.cards);
};

const controlFlipCard = function (card) {
  if (model.state.flippedCards.length >= 2) return;

  cardView.flipCard(card);
  model.addFlipToArray(card);
  console.log(model.state.flippedCards);
  model.checkMatching();
};

const init = function () {
  cardView.addHandlerReset(controlShuffle);
  if (model.state.flippedCards.length < 2) {
    cardView.addHandlerFlip(controlFlipCard);
  }
};

init();
