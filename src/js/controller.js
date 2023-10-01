import "bootstrap/dist/css/bootstrap.css";
import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js";
import cardView from "./cardView.js";

const controlFlipCard = function (card) {
  if (model.state.cards.length >= 2) return;

  cardView.flipCard(card);
  model.addFlipToArray(card);
  console.log(model.state.cards);
  model.checkMatching();
};

const init = function () {
  if (model.state.cards.length < 2) {
    cardView.addHandlerFlip(controlFlipCard);
  }
};

init();
