export const updateCardsContainer = (cardsContainer, dataFiltered) => {
  cardsContainer.innerHTML = "";
  dataFiltered.forEach((element) => {
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
}