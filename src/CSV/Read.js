
//Class for CSV
const parse = require('csv-parse');
const fs = require('fs');
const file = require('../fileOps/File');
const City = require('../models/City');
const outResult = [];

module.exports = class Read{
  static getData(filePath, model){
      let path = file.readFileSync(filePath);
      fs.createReadStream(filePath)
          .pipe(parse({
                  columns: true,
                  delimiter: ',',
                  trim: true,
                  skip_empty_lines: true
          })
              .on('readable', function (){
                      let result = fs.readFileSync(path);
                      const records = parse(result, path);
                      let outResult = Array();
                      records.forEach(function (data){
                          outResult.push(model.create(data));
                      });
                  return outResult;
              })
          .on('end', function(){
              //console.log(outResult);
      }));
  };
};