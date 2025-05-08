"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    ////
    function formatString(input, makeUpper) {
        if (makeUpper === true || makeUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    //
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    const filterByRating = (array) => {
        return array.filter((item) => item.rating >= 4);
    };
    //
    function concatenateArrays(...arrays) {
        return arrays.reduce((array, currentArray) => {
            return array.concat(currentArray);
        });
    }
    //
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
    //
    const processValue = (value) => {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return value * 2;
        }
        else {
            return "Please Provide Only String Or Number";
        }
    };
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        return products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
    ];
    //
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend";
        }
        else {
            return "Weekday";
        }
    }
    //
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n >= 0) {
                        resolve(n * n);
                    }
                    else {
                        reject(new Error("Negative number not allowed"));
                    }
                }, 1000);
            });
        });
    }
    // ////////////////
}
