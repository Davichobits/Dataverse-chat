import { dataset } from "../data/dataset.js";

export function Home() {
  const cardsContainer = document.createElement("section");
  cardsContainer.classList.add("cards-container");
  dataset.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${element.imageUrl}" alt="${element.name}" />
    <div class="card-body">
    <h2>${element.name}</h2>
    <p class="short-description">${element.shortDescription}</p>
    <p class="main-field">${element.facts.mainField}</p>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
  return cardsContainer;
}