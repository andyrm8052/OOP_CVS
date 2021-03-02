//import {expect} from "@jest/globals";
const Calculator = require('../src/Calculator');
const expect = require('expect');
const Read = require('../src/CSV/Read');

test('Calculator adding two numbers', () => {
    let file = Read.getRecords('./data/sum.csv');
    let calculator = new Calculator.Sum(parse(file[1]), parse(file[2])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[3])); //same as above
});

test('Calculator substracting two numbers', () => {
    let file = Read.getRecords('./data/difference.csv');
    let calculator = new Calculator.Difference(parse(file[0]), parse(file[1])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[2])); //same as above
});

test('Calculator multiplying two numbers', () => {
    let file = Read.getRecords('./data/product.csv');
    let calculator = new Calculator.Product(parse(file[4]), parse(file[5])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[6])); //same as above
});

test('Calculator dividing two numbers', () => {
    let file = Read.getRecords('./data/division.csv');
    let calculator = new Calculator.Quotient(parse(file[6]), parse(file[7])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[8])); //same as above
});

test('Calculator square of a number', () => {
    let file = Read.getRecords('./data/square.csv');
    let calculator = new Calculator.Square(parse(file[2]), parse(file[3])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[4])); //same as above
});

test('Calculator square root of a number', () => {
    let file = Read.getRecords('./data/squareroot.csv');
    let calculator = new Calculator.SquareRoot(parse(file[3]), parse(file[4])); //same as above
    expect(calculator.GetResults()).toBe(parse(file[5])); //same as above
});

/*
test('Calculator adding to calculations', () => {
    let CalculationObject = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculation;

    calculations.forEach(function(calculation){
        console.log(calculation.GetResults());
    });
    expect(CalculationObject.GetResults()).toBe(0.5);
});

test('Calculator Get Last Calculation', () => {
    Calculator.Product(1,2,"Product");
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});

test('Calculator test static Constructor', () => {
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});
 */