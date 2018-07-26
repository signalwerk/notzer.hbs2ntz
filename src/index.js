var Handlebars = require("handlebars");
var fs = require("fs");

const templatePath = './template/catalogue.hbs';
const dataPath = './DATA/hotelDataFiltered.json'
const htmlPath = './DATA/_processed/catalogue.html'



let templateFile = fs.readFileSync(templatePath, 'utf8');
let template = Handlebars.compile(templateFile);
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
let out = template(data);

fs.writeFileSync(htmlPath, out);
