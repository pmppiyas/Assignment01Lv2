{
  // Problem 1
  function formatString(input: string, makeUpper?: boolean): string {
    if (makeUpper === true || makeUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  // console.log(formatString("Piyas"));

  // Problem 2
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  type filterType = {
    title: string;
    rating: number;
  };

  const filterByRating = (array: filterType[]): filterType[] => {
    return array.filter((item) => item.rating >= 4);
  };

  // console.log(filterByRating(books));

  // Problem 3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((array, currentArray) => {
      return array.concat(currentArray);
    });
  }

  // console.log(concatenateArrays(["a", "b", "c"], ["d"], ["e", "f"]));

  // Problem 4

  class Vahicle {
    private _make: string;
    private _year: number;
    constructor(make: string, year: number) {
      this._make = make;
      this._year = year;
    }
    getInfo(): string {
      return `"Make: ${this._make}, Year: ${this._year}"`;
    }
  }

  class Car extends Vahicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this._model = model;
    }
    getModel(): string {
      return `Model: ${this._model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  // console.log(myCar.getInfo());
  // console.log(myCar.getModel());

  // Problem 5

  const processValue = (value: string | number): number | string => {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return "Please Provide Only Number or Password";
    }
  };
  // console.log(processValue("Hello"));
  // console.log(processValue(10));

  // Problem 6

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((maxProduct, currentProduct) =>
      currentProduct.price > maxProduct.price ? currentProduct : maxProduct
    );
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  // console.log(getMostExpensiveProduct(products));

  // Problem 7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  // console.log(getDayType(Day.Monday));
  // console.log(getDayType(Day.Sunday));

  // ////////////////
}
