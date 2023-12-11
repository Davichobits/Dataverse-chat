import { getFields, filterByField, sortData, findElements  } from "../../src/utils/functions";

import { dataTest } from "./datatest";

describe("getFields", () => {
  it("should return an array", () => {
    expect(Array.isArray(getFields([]))).toBe(true);
  });
  it("should return an array with unique values", () => {
    expect(getFields(dataTest)).toEqual(["field1", "field2"]);
  });
});

describe("filterByField", () => {
  
  it("should return an array", () => {
    expect(Array.isArray(filterByField([], "test"))).toBe(true);
  });

  it("should return an array with the elements that match the field", () => {

    expect(filterByField(dataTest, "field1")).toEqual([
      {
        name: "test1",
        facts: {
          mainField: "field1",
        },
      },
      {
        name: "test3",
        facts: {
          mainField: "field1",
        },
      },
    ]);
  });
  it("should return the same array if the field is all", () => {    
    expect(filterByField(dataTest, "all")).toEqual(dataTest);
  });
});

describe("sortData", () => {

  it("should return an array", () => {
    expect(Array.isArray(sortData([], "test"))).toBe(true);
  });
  it("should return an array sorted alphabetically", () => {
    expect(sortData(dataTest, "asc")).toEqual([
      {
        name: "test1",
        facts: {
          mainField: "field1",
        },
      },
      {
        name: "test2",
        facts: {
          mainField: "field2",
        },
      },
      {
        name: "test3",
        facts: {
          mainField: "field1",
        },
      },
    ]);
  });
  it("should return an array sorted alphabetically in reverse", () => {
    expect(sortData(dataTest, "desc")).toEqual([
      {
        name: "test3",
        facts: {
          mainField: "field1",
        },
      },
      {
        name: "test2",
        facts: {
          mainField: "field2",
        },
      },
      {
        name: "test1",
        facts: {
          mainField: "field1",
        },
      },
    ]);
  });
  it("should return the same array if the sortValue is all", () => {
    expect(sortData(dataTest, "all")).toEqual(dataTest);
  }
  );
}
);

describe("findElements", () => {
  it("should return an array", () => {
    expect(Array.isArray(findElements([], "test"))).toBe(true);
  });
  it("should return an array with the elements that match the search", () => {
    expect(findElements(dataTest, "test1")).toEqual([
      {
        name: "test1",
        facts: {
          mainField: "field1",
        },
      }
    ]);
  });
  it("should return the same array if the search is empty", () => {
    expect(findElements(dataTest, "")).toEqual(dataTest);
  });
});