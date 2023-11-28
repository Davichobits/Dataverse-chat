export const getFields = (data) => {
  const mainFields = data.map((element) => element.facts.mainField);
  const uniqueMainFields = [...new Set(mainFields)];
  return uniqueMainFields;
}