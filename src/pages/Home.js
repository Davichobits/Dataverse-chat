import { dataset } from "../data/dataset.js";
import { Header } from "../components/header/Header.js";
import { updateCardsContainer } from "../utils/dom.js";
import { navigateTo } from "../router.js";


export function Home() {
  // Contenedor de tarjetas
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("cards-container");
  // Header
  const header = Header(dataset, cardsContainer);
  
  updateCardsContainer(cardsContainer, dataset);

  const section = document.createElement("section");

  // Escucha de clic en cada tarjeta
  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.getAttribute("data-id");
      navigateTo('/details', { id: cardId });
    });
  });
  section.appendChild(header);
  section.appendChild(cardsContainer);
  return section;
}