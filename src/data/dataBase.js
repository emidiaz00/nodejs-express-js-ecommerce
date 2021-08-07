let fs = require('fs');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync('./src/data/product-list.json', 'utf-8')),
    getPc: JSON.parse(fs.readFileSync('./src/data/dataPcs.json','utf-8'))
}