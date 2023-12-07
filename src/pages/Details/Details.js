import { dataset } from "../../data/dataset.js";

function formatFact(fact) {
  return `<strong>${fact.split(":")[0]}:</strong>${fact.split(":")[1]}`;
}

export function Details() {
  const queryString = window.location.search;
  const section = document.createElement("section");
  section.classList.add("details-container");

  // Recoleccion de parametros
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  const currentCard = dataset.find(card => card.id === id);
  
  // Botón de volver
  const button = document.createElement('button');
  button.classList.add('back-btn');
  button.textContent = 'Volver';
  
  button.addEventListener('click', () => {
    window.history.back();
  });

  // icono atras
  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.setAttribute('src', '../assets/atras.png');
  icon.setAttribute('alt', 'icono atras');
  button.appendChild(icon);
  
  // Contenido de la tarjeta
  const articleEl = document.createElement('article');
  articleEl.classList.add('card-detail');
  
  articleEl.innerHTML = `
  <figure class="img-container">
    <img src="${currentCard.imageUrl}" alt="${currentCard.name}" />
    <figcaption class="field">${currentCard.facts.mainField}</figcaption>
  </figure>     
  <div class="card-info">
    <h2 class="card-name">${currentCard.name}</h2>
    <h3 class="card-short-description">${currentCard.shortDescription}</h3>
    <p class="card-description">${currentCard.description}</p>
    <p><strong>Año de nacimiento: </strong>${currentCard.facts.yearOfBirth}</p>
    <p><strong>Lugar de nacimiento: </strong>${currentCard.facts.placeOfBirth}</p>
    <ul>
      <li>${formatFact(currentCard.facts.curiousFact1)}</li>
      <li>${formatFact(currentCard.facts.curiousFact2)}</li>
    </ul>
  </div>
  `;
  
  section.appendChild(button);
  section.appendChild(articleEl);
  
  return section;
}