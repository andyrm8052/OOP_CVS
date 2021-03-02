const file = require('../fileOps/File');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');

module.exports = class Read {
    static getRecords(filename) {
        let absolutePath = file.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };

        let contents = fs.readFileSync(absolutePath);
        const records = parse(contents, options);
        let list = Array();
        records.forEach(function (data) {
            list.push(data.create);
        });

        return list;
    }
};