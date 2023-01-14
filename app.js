const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Patricia'},
//     {nome: 'Manoela'},
//     {nome: 'Fabrício'},
// ];

// const json = JSON.stringify(pessoas, '', 2);

// // write(filePath, json);

async function readFiles(path) {
    const result = await read(path);
    handleData(result);
}

function handleData(data) {
    data = JSON.parse(data);

    data.forEach(element => {
        console.log(element.nome);
    });
}

readFiles(filePath);

