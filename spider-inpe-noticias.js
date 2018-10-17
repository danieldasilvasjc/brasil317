
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://www.inpe.br/noticias/', function(err, res, body){
    if(err)console.log('Erro: ' +err);
    var $ = cheerio.load(body);
    //Para obtermos os dados da página, é necessário saber como eles estão estruturado. Pensando nisso, tenho que inspecionar o html.
    $('.coluna-1').each(function(){
        //Quero obter o título e nota de cada notícia
        var title = $(this).find('.chamada a').text().trim();
        //Para realizarmos um teste se está tudo correto, imprimo tudo no console
        //console.log('Título: '+title+'\n');
        console.log('Título: '+title);
        console.log();
        //Para uma melhor abordagem futura.
        //Irei salvar os dados em um arquivo.
        //fs.appendFile('noticias.txt', title + ' '+'\n');
        fs.appendFile('spider-noticias.txt', 'Título: '+title + ' '+'\n');
    });
});

