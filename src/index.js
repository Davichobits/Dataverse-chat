import { dataset } from "./data/dataset.js";
import { cardsContainer } from "./views/cards-container.js";

const app = document.querySelector("#root");
cardsContainer(dataset, app);