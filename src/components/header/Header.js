import { getFields, filterByField, sortData, findElements } from '../../utils/functions.js';
import { updateCardsContainer } from '../../utils/dom.js';
import { updateUrl } from '../../router.js';

export const Header = (data, cardsContainer) => {
  const fields = getFields(data);
  const headerEl = document.createElement('header');

  // Input del header
  headerEl.innerHTML = `
    <nav class='nav'>
    <div>
      <h1 class="title">Fundación</h1>
      <h2 class="subtitle">Isaac Asimov</h2>
    </div>
    <div class="inputs-container">
      <div>
      <input id="search" type="text" placeholder="Buscar">
      <select name="sort" id="sort">
        <option value="all">Cualquier orden</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select name="main-field" id="main-field"></select>
      </div>
      <button class="clear-btn">Clear</button>
    </div>
    </nav>
  `;

  // Dibujo la lista de campos
  headerEl.querySelector('#main-field').innerHTML = `
    <option value="all">Todas las áreas</option>
    ${fields.map(field => `<option value="${field}">${field}</option>`)}
  `;

  let currentData = [];
  let sortValue = 'all';
  let field = 'all';
  let userInput = '';

  const readUserInputs = () => {
    currentData = findElements(data, userInput);
    const dataFiltered = filterByField(currentData, field);
    const dataSorted = sortData(dataFiltered, sortValue);

    updateUrl(userInput, sortValue, field)

    return dataSorted;
  }

  // Evento para filtrar por campo
  const selectField = headerEl.querySelector('#main-field');
  const selectSort = headerEl.querySelector('#sort');
  const inputSearch = headerEl.querySelector('#search');

  // reseteo los valores de los inputs
  selectField.value = field;
  selectSort.value = sortValue;
  inputSearch.value = userInput;

  const dataUpdated = readUserInputs();
  updateCardsContainer(cardsContainer, dataUpdated);
  
  // Evento para buscar
  headerEl.querySelector('#search').addEventListener('input', (event) => {
    userInput = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // Evento para ordenar
  headerEl.querySelector('#sort').addEventListener('change', (event) => {
    sortValue = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // Evento para filtrar por campo
  selectField.addEventListener('change', (event) => {
    field = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // boton Clear
  const clearBtn = headerEl.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    userInput = '';
    sortValue = 'all';
    field = 'all';

    // reseteo los valores de los inputs
    selectField.value = field;
    selectSort.value = sortValue;
    inputSearch.value = userInput;

    // Actualizo la lista de tarjetas
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });
  
  return headerEl;
}