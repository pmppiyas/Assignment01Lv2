"use strict";
{
    // Problem 1
    function formatString(input, makeUpper) {
        if (makeUpper === true || makeUpper === undefined) {
            return input.toUpperCase();
        }
        else {
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
    const filterByRating = (array) => {
        return array.filter((item) => item.rating >= 4);
    };
    // console.log(filterByRating(books));
    // Problem 3
    function concatenateArrays(...arrays) {
        return arrays.reduce((array, currentArray) => {
            return array.concat(currentArray);
        });
    }
    // console.log(concatenateArrays(["a", "b", "c"], ["d"], ["e", "f"]));
    // Problem 4
    class Vahicle {
        constructor(make, year) {
            this._make = make;
            this._year = year;
        }
        getInfo() {
            return `"Make: ${this._make}, Year: ${this._year}"`;
        }
    }
    class Car extends Vahicle {
        constructor(make, year, model) {
            super(make, year);
            this._model = model;
        }
        getModel() {
            return `Model: ${this._model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    // console.log(myCar.getInfo());
    // console.log(myCar.getModel());
    // ////////////////
}
