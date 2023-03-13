const readlineSync = require('readline-sync');

let ask = readlineSync.question('Voce gostaria de adicionar codigos css?');
const tabela = [];


while (ask != 'sair') {
    const add = readlineSync.question('Adicione o codigo?');
    tabela.push(add);
    if (add == 'sair') {
        tabela.pop('sair');
        console.log(tabela.sort());
        break
    }   
}  








