const fs = require('fs').promises;


module.exports = (path, data) => {
    fs.writeFile(path, data, {flag: 'a', encoding: 'utf-8'});
};
