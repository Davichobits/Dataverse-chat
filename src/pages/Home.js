import { dataset } from "../data/dataset.js";

export function Home() {
  // Titulo
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Fundación";
  // Subtitulo
  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  subtitle.innerText = "Isaac Asimov";

  // Contenedor de tarjetas
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("cards-container");
  dataset.forEach((element) => {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `
    <figure class="img-container">
      <img src="${element.imageUrl}" alt="${element.name}" />
      <figcaption>${element.shortDescription}</figcaption>
    </figure>
    <div class="card-body">
    <h3 class="card-name">${element.name}</h3>
    <p class="short-description">${element.shortDescription}</p>
    <p class="main-field">${element.facts.mainField}</p>
    </div>
    `;
    cardsContainer.appendChild(card);
  });

  const section = document.createElement("section");
  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(cardsContainer);
  return section;
}