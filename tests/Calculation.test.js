const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');
const file = require('../src/fileOps/File');
const Read = require('../src/CSV/Read');
const City = require('../src/models/City');
const expect = require('expect');

test('Test of Calculation Instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test Get results for Sum function', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test Get results for Difference function', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Test Get results for Product function', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test Get results for Quotient function', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(0.5);
});

test('Test Get results for Square function', () => {
    let op = Square;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});

test('Test Get results for Square function', () => {
    let op = SquareRoot;
    let calculation = new Calculation(81,0.5,op);
    expect(calculation.GetResults()).toBe(9);
});


//tests for CSV
test('Find absolute path', () =>{
   const fs = require('fs');
   let file = 'data/worldcities.csv';
   let abPath = file.getAbsolutePath(file);

   fs.access(abPath, fs.F_OK, (err) => {
       let fileFound;
       if(err){
           fileFound = false;
       }
       else{
           fileFound = true;
       }
       expect(fileFound).toBeTruthy();
   });
});

test('Read CSV file', () => {
   let file = 'data/worldcities.csv';
   let records = Read.getRecords(file, City);
   expect(records.length).toBe(6);
});