export const getFields = (data) => {
  const mainFields = data.map((element) => element.facts.mainField);
  const uniqueMainFields = [...new Set(mainFields)];
  return uniqueMainFields;
}

export const filterByField = (data, field) => {
  let dataFiltered = [...data];
  if (field !== 'all') {
    return dataFiltered = data.filter(element => element.facts.mainField === field);
  } 
  return  dataFiltered;
};

export const sortData = (data, sortValue) => {
  const dataSorted = [...data];
  if (sortValue === 'asc') {
    return dataSorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === 'desc') {
    return dataSorted.sort((a, b) => b.name.localeCompare(a.name));
  }
  return dataSorted;
}

export const findElements = (data, userInput) => {
  const dataSearched = data.filter(element => element.name.toLowerCase().includes(userInput.toLowerCase()));
  return dataSearched;
}