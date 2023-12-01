import { dataset } from "../data/dataset.js";
import { Header } from "../components/header/Header.js";
import { updateCardsContainer } from "../utils/dom.js";


export function Home() {
  // Contenedor de tarjetas
  const cardsContainer = document.createElement("section");
  cardsContainer.classList.add("cards-container");
  // Header
  const header = Header(dataset, cardsContainer);
  
  updateCardsContainer(cardsContainer, dataset);

  const section = document.createElement("section");
  section.appendChild(header);
  section.appendChild(cardsContainer);
  return section;
}