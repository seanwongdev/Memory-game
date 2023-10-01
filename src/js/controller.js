import "bootstrap/dist/css/bootstrap.css";
import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js";
import cardView from "./cardView.js";

const controlFlipCard = function () {};

const init = function () {
  cardView.addHandlerFlip(controlFlipCard);
};

init();
