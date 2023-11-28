import { getFields } from '../../utils/functions.js';

export const Header = (data) => {
  const fields = getFields(data);
  console.log(fields)
  const headerEl = document.createElement('header');
  headerEl.innerHTML = `
    <nav class='nav'>
    <div>
      <h1 class="title">Fundación</h1>
      <h2 class="subtitle">Isaac Asimov</h2>
    </div>
    <div class="search-container">
      <input type="text" placeholder="Buscar">
      <select name="sort" id="sort">
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select name="main-field" id="main-field"></select>
    </div>
    </nav>
  `;

  headerEl.querySelector('#main-field').innerHTML = `
    <option value="">Todas las áreas</option>
    ${fields.map(field => `<option value="${field}">${field}</option>`)}
  `;
  console.log(headerEl)
  return headerEl;
}