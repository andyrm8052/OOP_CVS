const Calculation = require('../src/models/Calculation');
//const Sum = require('../src/Operations/Sum');
const Sum = require('../data/sum.csv');
//const Difference = require('../src/Operations/Difference');
const Difference = require('../data/difference.csv');
//const Product = require('../src/Operations/Product');
const Product = require('../data/product.csv');
//const Quotient = require('../src/Operations/Quotient');
const Quotient = require('../data/division.csv');
//const Square = require('../src/Operations/Square');
const Square = require('../data/square.csv');
//const SquareRoot = require('../src/Operations/SquareRoot');
const SquareRoot = require('../data/squareroot.csv');
const file = require('../src/fileOps/File');
const Read = require('../src/CSV/Read');
const City = require('../src/models/City');
const expect = require('expect');

/*
test('Test of Calculation Instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
*/

//test utilizing the CSV reader and files
test('Test Get results for Sum function using CSV', () => {
    let file = Read.getRecords('../data/sum.csv');
    let calculation = new Calculation(parse(file[1]), parse(file[2]), Sum); //same as above
    expect(calculation.GetResults()).toBe(parse(file[3])); //same as above
});

test('Test Get results for Difference function using CSV', () => {
    let file = Read.getRecords('../data/difference.csv');
    let calculation = new Calculation(parse(file[0]), parse(file[1]), Difference); //same as above
    expect(calculation.GetResults()).toBe(parse(file[2])); //same as above
});

test('Test Get results for Product function using CSV', () => {
    let file = Read.getRecords('../data/product.csv');
    let calculation = new Calculation(parse(file[4]), parse(file[5]), Product); //same as above
    expect(calculation.GetResults()).toBe(parse(file[6])); //same as above
});

test('Test Get results for Quotient function using CSV', () => {
    let file = Read.getRecords('../data/division.csv');
    let calculation = new Calculation(parse(file[6]), parse(file[7]), Quotient); //same as above
    expect(calculation.GetResults()).toBe(parse(file[8])); //same as above
});

test('Test Get results for Square function using CSV', () => {
    let file = Read.getRecords('../data/square.csv');
    let calculation = new Calculation(parse(file[2]), parse(file[3]), Square); //same as above
    expect(calculation.GetResults()).toBe(parse(file[4])); //same as above
});

test('Test Get results for Square Root function using CSV', () => {
    let file = Read.getRecords('../data/squareroot.csv');
    let calculation = new Calculation(parse(file[3]), parse(file[4]), SquareRoot); //same as above
    expect(calculation.GetResults()).toBe(parse(file[5])); //same as above
});