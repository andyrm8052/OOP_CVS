module.exports = class file {
    static getAbsolutePath(file) {
        const path = require('path');
        return path.resolve(file);
    }
};